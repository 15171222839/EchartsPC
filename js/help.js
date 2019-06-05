
$(function(){
    // 图1
    function leftFb3(id,name,txt){
        var echartsLineArea3 = echarts.init(document.getElementById(id)); 
        optionLineArea3 = {
            title:{//标题组件，包含主标题和副标题
            text:'户数（户）',
            textStyle:{
                color:'#fff',
                fontSize:12
            },
            left:30,
            top:10
            },
            legend: {//图例组件。   正中央悬浮那个文字
                borderColor:'white',
                data:[{
                    name:name,
                    textStyle: {
                        color: 'white',
                        fontSize:14
                    }
                }],
            },
            tooltip : {//设置 提示框组件
                trigger: 'axis',
                axisPointer: {  //坐标轴指示器配置项。
                    type: 'none'
                },
                formatter:'{a}<br />{b}<br />{c}户'
            },
            grid:{ //图形位移
            left: 55,
            right:55,
            top:40,
            bottom:20,
            },
            calculable : true,
            xAxis : [
                { 
                    type : 'category',
                    boundaryGap : false,
                    name:'年份',
                    data : ['2013','2014','2015','2016','2017','2018','2019'],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'1'//坐标线的宽度
                        }
                    },
                    axisTick:{
                      inside:{
                          show:true //x轴刻度线 
                      }                    
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: ''
                        },
                        interval:0
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    // splitLine:{show: false},//去除网格线
                    splitLine:{
                        show: true,
                        lineStyle: {
                              type: 'dashed',
                              color: '#42416f',//坐边线的颜色
                              width:'1'//坐标线的宽度
                          }
                      },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    color:'rgba( 255, 255, 255, 0.2 )',
                    axisTick:{ 
                        inside:{
                            show:true //x轴刻度线 
                        }                    
                      },
                    min:0,
                    max:20000,
                    splitNumber:5

                }
            ],
            series : [
                {
                    name:name,
                    type:'line',
                    // symbol:"none",//去掉悬浮点
                    smooth:true,
                    itemStyle: {normal: {
                        borderColor: "white",
                        areaStyle: {
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#1b618c'},
                                {offset: 1, color: '#0b0b54'}
                            ]),
                            opacity:0.8
                        },
                        lineStyle:{
                            color:'#02eaf9',
                            width:'2'
                        }
                    }

                    },
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    data:[17500, 15000, 11230, 10000, 9000, 7000, 1000]
                }
            ]
        };

        // echartsLineArea3.clear();

        echartsLineArea3.setOption(optionLineArea3);
    }
    leftFb3('mainLeft1','户数','') 


    // 图2
    function leftFb2(max,data,arr){
        var echartsLineArea2 = echarts.init(document.getElementById('mainLeft2')); 
        optionLineArea2 = {
          title:{
            text:'户数（户）',
            textStyle:{
              color:'#fff',
              fontSize:12
            },
            left:30,
            top:10
          },
          legend: {
            borderColor:'white',
            data:[{
                name:"户数",
                icon: 'rect',
                textStyle: {
                    color: 'white',
                    fontSize:14
                }
            }],
        },
          tooltip : {//设置在全局的提示框组件
              show: true,
               trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter:'{b}<br />{c}户'
          },
          grid: {  //图形位移
              left: 5,
              right:25,
              top:40,
              bottom:20,
              containLabel: true
          },
          xAxis: {
            splitLine:{show: false},//去除网格线
              type: 'category',
              data: data,
              axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#fff',//坐边线的颜色
                      width:'1'//坐标线的宽度
                  }
              },
              axisTick:{ 
                inside:{
                    show:true //x轴刻度线 
                }                    
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: ''
                  },
                  interval:0
              },
          },
          yAxis: [
              {
                  type : 'value',
                  splitLine:{ //  y轴设置虚线
                    show: true,
                    lineStyle: {
                          type: 'dashed',
                          color: '#42416f',//坐边线的颜色
                          width:'1'//坐标线的宽度
                      }
                  },
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '' //y字颜色
                      }
                  },
                  axisLine: {
                      lineStyle: {
                          type: 'solid',
                          color: '#fff',//坐边线的颜色
                          width:'1'//坐标线的宽度
                      }
                  },
                  color:'rgba( 255, 255, 255, 0.2 )',
                  axisTick:{ 
                    inside:{
                        show:true //x轴刻度线 
                    }                    
                  },
                  show:true,
                  max:max,
                  splitNumber:5
              }
          ],
          series : [
              {
                  name:'户数',
                  type:'bar',
                  barWidth: '14',
                  data:arr,
                  itemStyle: {                      
                     normal: {
                           // 添加渐变颜色
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#bb86d8'},
                                {offset: 1, color: '#0f4ea6'}
                            ])
                           
                   },

                },
                animationDelay: function (idx) {
                    return idx * 50;
                }
              }
          ],
          animationEasing: 'sinusoidalOut',
          animationDelayUpdate: function (idx) {
              return idx * 0;
          }
        };
  
        // echartsLineArea2.clear();
  
        echartsLineArea2.setOption(optionLineArea2);
  
    } 
    leftFb2(40000,['杭州','宁波','温州','绍兴','金华','台州'],[27000, 22000, 36000, 26000, 18000, 4900])


        //图3  环形图
        function leftpic2(id,name2){
            let myChart1 = echarts.init(document.getElementById(id));
            let option1 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                itemGap:20,
                x: 'left',
                top:'20%',
                left:'50%',
                textStyle:{
                    color:'white',
                },
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    center: ['26%', '50%'],
                    radius: ['30%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: { 
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
            };
            myChart1.setOption(option1);
        }
        leftpic2("mainLeft3","地区搬迁情况")


    // 右边 图1
    function rightFb1(id,name,txt){
        var echartsLineArea3 = echarts.init(document.getElementById(id)); 
        optionLineArea3 = {
            title:{
            text:'户数（人）',
            textStyle:{
                color:'#fff',
                fontSize:12
            },
            left:30,
            top:10
            },
            legend: {
                borderColor:'white',
                data:[{
                    name:name,
                    textStyle: {
                        color: 'white',
                        fontSize:14
                    }
                }],
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                    }
            },
            grid:{
            left: 55,
            right:55,
            top:40,
            bottom:20,
            },
            calculable : true,
            xAxis : [
                { 
                    type : 'category',
                    boundaryGap : false,
                    name:'年份',
                    data : ['2013','2014','2015','2016','2017','2018','2019'],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'1'//坐标线的宽度
                        }
                    },
                    axisTick:{ 
                      inside:{
                          show:true //x轴刻度线 
                      }                    
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: ''
                        },
                        interval:0
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show: true,
                        lineStyle: {
                              type: 'dashed',
                              color: '#42416f',//坐边线的颜色
                              width:'1'//坐标线的宽度
                          }
                      },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    // color:'rgba( 255, 255, 255, 0.2 )',
                    axisTick:{ 
                        inside:{
                            show:true //x轴刻度线 
                        }                    
                      },
                    min:0,
                    max:60000,
                    splitNumber:5

                }
            ],
            series : [
                {
                    name:name,
                    type:'line',
                    // symbol:"none",//去掉悬浮点
                    smooth:true,
                    itemStyle: {normal: {
                        borderColor: "white",
                        areaStyle: {
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#1b618c'},
                                {offset: 1, color: '#0b0b54'}
                            ]),
                            opacity:0.8
                        },
                        lineStyle:{
                            color:'#02eaf9',
                            width:'2'
                        }
                    }

                    },
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    data:[17500, 15000, 11230, 10000, 9000, 7000, 1000]
                }
            ]
        };

        // echartsLineArea3.clear();

        echartsLineArea3.setOption(optionLineArea3);
    }
    rightFb1('mainRight1','人数','') 

    // 右边 图2
    function rightFb2(id,name,txt){
        var echartsLineArea3 = echarts.init(document.getElementById(id)); 
        optionLineArea3 = {
            title:{
            text:'（亿元）',
            textStyle:{
                color:'#fff',
                fontSize:12
            },
            left:30,
            top:10
            },
            legend: {
                borderColor:'white',
                data:[{
                    name:name,
                    textStyle: {
                        color: 'white',
                        fontSize:14
                    }
                }],
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                    }
            },
            grid:{
            left: 55,
            right:55,
            top:40,
            bottom:20,
            },
            calculable : true,
            xAxis : [
                { 
                    type : 'category',
                    boundaryGap : false,
                    name:'年份',
                    // nameLocation:'end',
                    data : ['2013','2014','2015','2016','2017','2018','2019'],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'1'//坐标线的宽度
                        }
                    },
                    axisTick:{ 
                      inside:{
                          show:true //x轴刻度线 
                      }                    
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: ''
                        },
                        interval:0
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show: true,
                        lineStyle: {
                              type: 'dashed',
                              color: '#42416f',//坐边线的颜色
                              width:'1'//坐标线的宽度
                          }
                      },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: ''
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: 'white',//坐边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    // color:'rgba( 255, 255, 255, 0.2 )',
                    axisTick:{ 
                        inside:{
                            show:true //x轴刻度线 
                        }                    
                      },
                    min:0,
                    max:8,
                    splitNumber:5

                }
            ],
            series : [
                {
                    name:name,
                    type:'line',
                    // symbol:"none",//去掉悬浮点
                    smooth:true,
                    itemStyle: {normal: {
                        borderColor: "white",
                        areaStyle: {
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#1b618c'},
                                {offset: 1, color: '#0b0b54'}
                            ]),
                            opacity:0.8
                        },
                        lineStyle:{
                            color:'#02eaf9',
                            width:'2'
                        }
                    }

                    },
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    data:[2.2, 3.9, 2.6, 6, 3.1, 6.9, 6.3]
                }
            ]
        };

        // echartsLineArea3.clear();

        echartsLineArea3.setOption(optionLineArea3);
    }
    rightFb2('mainRight2','补助资金','') 


     //右 图3
     function rightFb3(max,data,arr){
        var echartsLineArea2 = echarts.init(document.getElementById('mainRight3')); 
        optionLineArea2 = {
          title:{
            text:'户数（户）',
            textStyle:{
              color:'#fff',
              fontSize:12
            },
            left:30,
            top:10
          },
          legend: {
            borderColor:'white',
            data:[{
                name:"农户",
                icon: 'roundRect',
                textStyle: {
                    color: 'white',
                    fontSize:14
                }
            }],
        },
          tooltip : {
              show: true,
               trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter:'{b}<br />{c}户'
          },
          grid: {  //图形位移
              left: 5,
              right:25,
              top:40,
              bottom:20,
              containLabel: true
          },
          xAxis: {
            // splitLine:{show: false},//去除网格线
              type: 'category',
              data: data,
              axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: 'white',//坐边线的颜色
                      width:'1'//坐标线的宽度
                  }
              },
              axisTick:{ 
                inside:{
                    show:true //x轴刻度线 
                }                    
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: ''
                  },
                  interval:0
              },
          },
          yAxis: [
              {
                  type : 'value',
                  splitLine:{
                    show: true,
                    lineStyle: {
                          type: 'dashed',
                          color: '#42416f',//坐边线的颜色
                          width:'1'//坐标线的宽度
                      }
                  },
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '' //y字颜色
                      }
                  },
                  axisLine: {
                      lineStyle: {
                          type: 'solid',
                          color: '#fff',//坐边线的颜色
                          width:'1'//坐标线的宽度
                      }
                  },
                  color:'rgba( 255, 255, 255, 0.2 )',
                  axisTick:{ 
                    inside:{
                        show:true //x轴刻度线 
                    }                    
                  },
                  show:true,
                  max:max,
                  splitNumber:5
              }
          ],
          series : [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius:[50, 50, 0, 0],
                        color: '#303e8c'
                    }
                },
                silent: true,
                barWidth: 14,
                barGap: '-100%', // Make series be overlap
                data: [1800, 1800, 1800, 1800 ,1800 ,1800]
            },{
                  name:'农户',
                  type:'bar',
                  barWidth: '14',
                  data:arr,
                  itemStyle: {                      
                     normal: {
                        barBorderRadius:[50, 50, 0, 0],
                           // 添加渐变颜色
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#0ecdf8'},
                                {offset: 1, color: '#0572e9'}
                            ])
                           
                   },

                },
                animationDelay: function (idx) {
                    return idx * 50;
                }
              }
          ],
          animationEasing: 'sinusoidalOut',
          animationDelayUpdate: function (idx) {
              return idx * 0;
          }
        };
  
        // echartsLineArea2.clear();
  
        echartsLineArea2.setOption(optionLineArea2);
  
    } 
    rightFb3(2000,['杭州','宁波','温州','绍兴','金华','台州'],[900, 800, 700, 600, 500, 400])




    //可删
    // function rightpic(id,name){
    //     // 基于准备好的dom，初始化echarts实例
    //     let myChart = echarts.init(document.getElementById('main1'));
    //         // 指定图表的配置项和数据
    //         option = {
    //         title: {
    //             text: '某楼盘销售情况',
    //             subtext: '纯属虚构'
    //         },
    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         legend: {
    //             data:['意向']
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: false,
    //             data: ['周一','周二','周三','周四','周五','周六','周日']
    //         },
    //         yAxis: {
    //             type: 'value'
    //         },
    //         series: [{
    //             name: '成交',
    //             type: 'line',
    //             smooth: true,
    //             data: [10, 12, 21, 54, 260, 830, 710]
    //         }]
    //     };
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    // }
    
    // rightpic()

    



    //地图
    function mapMap(){
        console.log(111)
        //初始化地图
        var map = new AMap.Map('container',{
            mapStyle: 'amap://styles/bbd02db63067eb47d88757fbdcd93a02', //设置地图的显示样式
            center: [120.357238, 29.165918],//地图中心点
            zoom: 8 ,//地图显示的缩放级别
            zoomEnable: true
        });

        var district = null;
        var polygons=[];
        function drawBounds() {
            //加载行政区划插件
            if(!district){
                //实例化DistrictSearch
                var opts = {
                    subdistrict: 0,   //获取边界不需要返回下级行政区
                    extensions: 'all',  //返回行政区边界坐标组等具体信息
                    level: 'district'  //查询行政级别为 市
                };
                district = new AMap.DistrictSearch(opts);
            }
            //行政区查询
            district.setLevel('province');
            district.search('浙江省', function(status, result) {
                map.remove(polygons)//清除上次结果
                polygons = [];
                var bounds = result.districtList[0].boundaries;
                if (bounds) {
                    for (var i = 0, l = bounds.length; i < l; i++) {
                        //生成行政区划polygon
                        var polygon = new AMap.Polygon({
                            strokeWeight: 1,
                            path: bounds[i],
                            fillOpacity: 0.2,
                            fillColor: '#0068b7',
                            strokeColor: '#fff'
                        });
                        polygons.push(polygon);
                    }
                }
                map.add(polygons)
                // map.setFitView(polygons);//视口自适应
            });
        }
        drawBounds();

        map.setMapStyle('amap://styles/bbd02db63067eb47d88757fbdcd93a02');

        if (!isSupportCanvas()) {
        alert('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
        }

        //详细的参数,可以查看heatmap.js的文档 http://www.patrick-wied.at/static/heatmapjs/docs.html
        //参数说明如下:
        /* visible 热力图是否显示,默认为true
        * opacity 热力图的透明度,分别对应heatmap.js的minOpacity和maxOpacity
        * radius 势力图的每个点的半径大小
        * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
        *	{
        .2:'rgb(0, 255, 255)',
        .5:'rgb(0, 110, 255)',
        .8:'rgb(100, 0, 255)'
        }
        其中 key 表示插值的位置, 0-1
        value 为颜色值
        */
        var heatmap;
        var points =[
        {"lng":121.557238,"lat":29.865918,"count":100},
        {"lng":121.57652,"lat":29.873292,"count":110},
        {"lng":120.662967,"lat":28.01932,"count":120},
        {"lng":120.817197,"lat":27.939594,"count":130},
        {"lng":120.187367,"lat":30.286963,"count":100},
        {"lng":120.149998,"lat":30.324628,"count":110},
        {"lng":121.57652,"lat":29.873292,"count":120},
        {"lng":121.562435,"lat":29.903603,"count":130},
        {"lng":120.107367,"lat":30.206963,"count":100},
        {"lng":120.109998,"lat":30.224628,"count":110},
        {"lng":120.27652,"lat":28.873292,"count":120},
        {"lng":120.562435,"lat":29.203603,"count":130},
        {"lng":120.180367,"lat":29.286963,"count":100},
        {"lng":120.049998,"lat":29.324628,"count":110},
        {"lng":120.57652,"lat":29.073292,"count":120},
        {"lng":120.562435,"lat":28.903603,"count":130},
        {"lng":120.087367,"lat":29.086963,"count":100},
        {"lng":120.049998,"lat":30.024628,"count":110},
        {"lng":121.07652,"lat":28.873292,"count":120},
        {"lng":120.562435,"lat":28.703603,"count":130},
        {"lng":120.062435,"lat":28.203603,"count":130},
        {"lng":120.587367,"lat":28.086963,"count":100},
        {"lng":120.009998,"lat":29.024628,"count":110},
        {"lng":120.07652,"lat":28.073292,"count":120},
        {"lng":120.562435,"lat":28.803603,"count":130},
        {"lng":120.062435,"lat":28.003603,"count":130},
        {"lng":120.887367,"lat":28.086963,"count":100},
        {"lng":120.849998,"lat":29.024628,"count":110},
        {"lng":121.07652,"lat":28.073292,"count":120},
        {"lng":120.562435,"lat":28.003603,"count":130}
        ];
        map.plugin(["AMap.Heatmap"], function () {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
            radius: 30,//给定半径
            opacity: [0, 1],
            /*
            gradient:{ 
                0.4:'rgb(0, 255, 255)',
                0.65:'rgb(0, 110, 255)',
                0.85:'rgb(178, 95,217)',
                1.0:'rgb(0, 255, 246)'
                
            } ,*/
            // zooms:[5,16]
            
        });
        //设置数据集：该数据为北京部分“公园”数据
        heatmap.setDataSet({
            data: points
        });
        });

        //判断浏览区是否支持canvas
        function isSupportCanvas() {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        }
    }
    mapMap()
    
    //接口调用
    // $.ajax({
    //     type:"get",
    //     url:"http://192.168.12.208:8083/jhbqnh",
    //     success:function(res){
    //         var data = JSON.parse(res);
    //         console.log(data)
    //         console.log(data.relocation_plan)


            
    //     }
    // });
    // $.ajax({
    //     type:"post",
    //     url: 'http://192.168.12.215:8083/overall/info?year=2019&areacode=33',
    //     dataType: 'jsonp',
    //     jsonp: 'callback',      //为服务端准备的参数
    //     jsonpCallback: 'getdata',   //回调函数
    //     success: function(res){
    //         console.log(11111111)
    //         console.log(res)
    //     }
    // });
})