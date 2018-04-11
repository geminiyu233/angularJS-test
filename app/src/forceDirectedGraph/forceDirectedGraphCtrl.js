angular.module("forceDirectedGraphModule", [])
    .controller("forceDirectedGraphCtrl", ["$scope", "$resource", function ($scope, $resource) {
        // console.log(1);
        // var node = $resource('forceDirectedGraph/data.json').get(function(){
        //     console.log(node);
        // });
        var nodes = [{
                name: "中国",
                level:0,
                desc:"第一层"
            }, {
                name: "广州",
                level:1,
                desc:"第二层"
            },{
                name: "福建",
                level:2,
                desc:"第二层"
            },
            {
                name: "浙江",
                level:1,
                desc:"第二层"
            }, {
                name: "杭州",
                level:2,
                desc:"第二层"
            },
            {
                name: "山东",
                level:1,
                desc:"第二层"
            }, {
                name: "青岛",
                level:2,
                desc:"第二层"
            }
        ];
        $scope.data = nodes;
        var edges = [{
                source: 0,
                target: 1
            }, {
                source: 1,
                target: 2
            },
            {
                source: 0,
                target: 3
            }, {
                source: 3,
                target: 4
            },
            {
                source: 0,
                target: 5
            }, {
                source: 5,
                target: 6
            }
        ];

        var width = 500;
        height = 600;
        nodes[0].x=width/2 - 40;
        nodes[0].y=height/2;
        nodes[0].fixed = true;
        console.log(width/2);
        console.log(nodes[0].x);
        var force = d3.layout.force()
            .nodes(nodes) //指定节点数组
            .links(edges) //指定连线数组
            .size([width, height]) //指定作用域范围
            .linkDistance(100) //指定连线长度
            .charge([-1500]); //相互之间的作用力

        force.start(); //开始作用
        console.log(nodes);
        console.log(edges);

        var svg = d3.select("svg")
        .attr("width",width)
        .attr("height",height);
        var svg_edges = svg.selectAll("line")
            .data(edges)
            .enter()
            .append("line")
            .style("stroke", "#ccc")
            .style("stroke-width", 1);

        var color = d3.scale.category20();

        //添加节点 
        var svg_nodes = svg.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", 20)
            .attr("cx",function(d){//限定在指定宽高中运动
                if(d.x<0){
                    d.x=0;
                }else if(d.x>width){
                    d.x = width;
                }
                return d.x;
            })
            .attr("cy",function(d){
                if(d.y<0){
                    d.y=0;
                }else if(d.y>height){
                    d.y=height;
                }
                return d.y;
            })
            .style("fill", function (d) {
                return color(d.level);
            })
            .call(force.drag) //使得节点能够拖动
            .on("mouseover",function(d){
                $scope.$apply(function(){
                    d.bgr = true;
                });
                //显示连接线上的文字
                // edges_text.style("fill-opacity",function(edge){
                //     if( edge.source === d || edge.target === d ){
                //         return 1.0;
                //     }
                // });
            })
            .on("mouseout",function(d){
                $scope.$apply(function(){
                    d.bgr = false;
                });
            });

        //添加描述节点的文字
        var svg_texts = svg.selectAll("text")
            .data(nodes)
            .enter()
            .append("text")
            .style("fill", "black")
            .attr("dx", 20)
            .attr("dy", 8)
            .text(function (d) {
                return d.name;
            });

        force.on("tick", function () { //对于每一个时间间隔
            //更新连线坐标
            svg_edges.attr("x1", function (d) {
                    return d.source.x;
                })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

            //更新节点坐标
            svg_nodes.attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                });

            //更新文字坐标
            svg_texts.attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                });
        });

        function togglePoint(){

        }
    }]);