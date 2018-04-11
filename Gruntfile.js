module.exports = function (grunt) {

  grunt.initConfig({
    //读取package.json文件
    pkg: grunt.file.readJSON('package.json'), //pkg.name:'app',
    //concat用来合并js文件
    concat: {
      options: {
        // 定义一个用于插入合并输出文件之间的字符
        separator: ''
      },
      dist: {
        // 将要被合并的文件
        src: ['app/src/**/*.js'],
        // 合并后的JS文件的存放位置
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    //uglify用来压缩js文件
    uglify: {
      options: {
        // 此处定义的banner注释将插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          //uglify会自动压缩concat任务中生成的文件
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    //jshint用来检查js代码规范
    jshint: {
      files: ['Gruntfile.js', 'app/src/**/*.js'], //要进行js检查的文件
      options: {
        //这里是覆盖JSHint默认配置的选项
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    //watch用来监听文件，当文件发生变化时会执行tasks中指定的任务
    watch: {
      //监听的文件
      files: ['<%= jshint.files %>', 'app/index.html'],
      tasks: ['concat', 'wiredep', 'uglify', 'jshint']
    },
    //wiredep自动将bower_components中的包加入到index.html中
    wiredep: {
      task: {
        src: ['app/index.html']
      }
    },
    //服务器连接服务
    connect: {
      options: {
        port: 80,
        hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 443 //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            'app/' //主目录
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task（默认任务，输入grunt后的）.
  grunt.registerTask('default', ['concat', 'wiredep', 'uglify', 'jshint']);
};