angular.module("pictureToolModule", [])
    .controller("pictureToolCtrl", ["$scope", function ($scope) {
        // var imageBox = [{
        //     width: 300,
        //     height: 300,
        //     src: "asset/pic.jpg"
        // }];

        // const $ctrl = this;
        // const d3 = this.d3;
        // const svg = d3.selectAll('.nonstandard-display-area svg')
        //     .data(this.data.images)
        //     .attr("width", d => {
        //         return d._width;
        //     })
        //     .attr("height", d => {
        //         // 预留下方工具栏高度，防止遮挡图片
        //         return d._height + 60;
        //     })
        //     .on('mouseenter', function(d) {
        //         // 显示工具栏
        //         toggleTools(d3.select(this), d, 1);
        //     })
        //     .on('mouseleave', function(d) {
        //         // 隐藏工具栏
        //         toggleTools(d3.select(this), d, 0);
        //     });

        // // 填充背景底色
        // svg.select('.nonstandard-display-area .background')
        //     .attr("width", d => {
        //         return d._width;
        //     })
        //     .attr("height", d => {
        //         // 预留下方工具栏高度，防止遮挡图片
        //         return d._height;
        //     });

        // // 插入图片
        // const imageContainer = svg.select('.nonstandard-display-area .img-container')
        //     .attr('transform', d => {
        //         return `translate(${d._x},${d._y})scale(${d.scaleRate})`
        //     });
        // imageContainer.select('image')
        //     .attr('xlink:href', d => {
        //         return d.src;
        //     })
        //     .attr('width', d => {
        //         return d.width;
        //     })
        //     .attr('height', d => {
        //         return d.height;
        //     });

        // // 添加控件
        // addTools(imageContainer);

        // function addTools(imageContainer) {
        //     // 定义拖拽行为
        //     const drag = d3.behavior.drag()
        //         .on("drag", dragmove)
        //         .origin(d => {
        //             return {
        //                 x: d._x,
        //                 y: d._y
        //             }
        //         });

        //     function dragmove() {
        //         d3.select(this)
        //             .attr("transform", d => {
        //                 d._x = d3.event.x;
        //                 d._y = d3.event.y;
        //                 return `translate(${d3.event.x},${d3.event.y})scale(${d.scaleRate})`;
        //             });
        //     }
        //     // 底部工具栏
        //     const toolBar = d3.selectAll('.nonstandard-display-area .tool-bar')
        //         .data($ctrl.data.images)
        //         .attr('transform', d => {
        //             return `translate(0,${d._height})`;
        //         });
        //     toolBar.select('rect')
        //         .attr('width', d => {
        //             return d._width;
        //         });

        //     // 缩放工具
        //     // 放大
        //     toolBar.select('.zoom-in')
        //         .on('click', function(toolsContainerDatum) {
        //             imageContainer.attr('transform', (d) => {
        //                 if (toolsContainerDatum.page !== d.page)
        //                     return `translate(${d._x},${d._y})scale(${d.scaleRate})`;
        //                 d.scaleRate = d.scaleRate < 2 ? d.scaleRate + 0.1 : d.scaleRate;
        //                 if (d.scaleRate > d._scaleRate) {
        //                     imageContainer.classed({ 'cursor-move': true })
        //                         .call(drag);
        //                 }
        //                 return `translate(${d._x},${d._y})scale(${d.scaleRate})`;
        //             })
        //         });
        //     // 缩放
        //     toolBar.select('.zoom-out')
        //         .on('click', (toolsContainerDatum) => {
        //             imageContainer.attr('transform', (d) => {
        //                 if (toolsContainerDatum.page !== d.page)
        //                     return `translate(${d._x},${d._y})scale(${d.scaleRate})`;
        //                 d.scaleRate = d.scaleRate > 0.2 ? d.scaleRate - 0.1 : d.scaleRate;
        //                 if (d.scaleRate <= d._scaleRate) {
        //                     imageContainer
        //                         .classed({ 'cursor-move': false })
        //                         .on(".drag", null);
        //                     return `translate(0,0)scale(${d.scaleRate})`;

        //                 }
        //                 return `scale(${d.scaleRate})`;
        //             });
        //         });
        // }

        // // 显示控件
        // function toggleTools(currentSvg, d, opacity) {
        //     currentSvg.select('.tool-bar')
        //         .transition()
        //         .attr('opacity', opacity);
        // }

        // var zoom = d3.behavior.zoom()
        //     .scaleExtent([0.2, 2])
        //     .on("zoom", function () {
        //         svg.select("image").attr("tranform", "translate(0,0)scale(" + d3.event.scale + ")");
        //     });

        // var svg = d3.selectAll("svg")
        //     .attr('width', 600)
        //     .attr('height', 600);

        // var image = svg.select("image")
        //     .data(imageBox)
        //     .attr("xlink:href", function (val) {
        //         return val.src;
        //     })
        //     .attr('width', function (val) {
        //         return val.width;
        //     })
        //     .attr('height', function (val) {
        //         return val.height;
        //     });
        // svg.select("g").call(zoom);

        var circles = [{
                cx: 30,
                cy: 30,
                r: 30
            }
        ];
        var zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on("zoom", function(){
                console.log(d3.event.scale);
            d3.select(this).attr("transform",
                "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            });

        var svg = d3.selectAll("svg")
            .attr('width', 600)
            .attr('height', 600);

        var circles_group = svg.append("g");

        circles_group.selectAll("circle")
            .data(circles)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return d.cx;
            })
            .attr("cy", function (d) {
                return d.cy;
            })
            .attr("r", function (d) {
                return d.r;
            })
            .attr("fill", "#000")
            .call(zoom);
    }]);