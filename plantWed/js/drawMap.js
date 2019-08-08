
var myChart = echarts.init(document.getElementById('mapCenter'));

var uploadedDataURL = "json/xiaoshan.json";

function randomData() {
    return Math.round(Math.random() * 0.5);
}

var name = 'xiaoshan';
    
myChart.hideLoading();

$.get(uploadedDataURL,function(geoJson) {
    
    // console.log(geoJson)

    echarts.registerMap(name, geoJson);

    option = {

        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center'
        },
        geo: {
            show: true,
            map:  name,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#001d55',
                    borderWidth: 3,
                    borderColor: '#18e9ff',
                    shadowColor: '#18e9ff',
                    shadowBlur: 10
                }
            },
            zoom:1.2
        },
        series: [{
            type: 'map',
            mapType: name,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                         color: '#00aaff', //地图初始化区域字体颜色
                         fontSize:10,
                         opacity: 1,
                         backgroundColor: 'rgba(0,23,11,0)'
                     }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                         color: '#00aaff', //地图初始化区域字体颜色
                         fontSize:10,
                         opacity: 1,
                         backgroundColor: 'rgba(0,23,11,0)'
                    }
              }
                
            },
             itemStyle: {
                 normal:{
                   areaColor: '#001d55',
                   borderWidth: 0.6,
                   borderColor: '#0354ca'
                 },emphasis: {
                   areaColor: '#165baf',
                   color:'#fff'
              }
             },
            animation: false,
            zoom:1.2,
            data: [
                {
                    name:'北干街道',
                    value:20
                },
                {
                    name:'城厢街道',
                    value:20
                },
                {
                    name:'戴村镇',
                    value:20
                },
                {
                    name:'党湾镇',
                    value:20
                },
                {
                    name:'瓜沥镇',
                    value:20
                },
                {
                    name:'河上镇',
                    value:20
                },
                {
                    name:'河庄街道',
                    value:20
                },
                {
                    name:'红山农场',
                    value:20
                },
                {
                    name:'进化镇',
                    value:20
                },
                {
                    name:'靖江街道',
                    value:20
                },
                {
                    name:'临江街道',
                    value:20
                },
                {
                    name:'临浦镇',
                    value:20
                },
                {
                    name:'楼塔镇',
                    value:20
                },
                {
                    name:'南阳街道',
                    value:20
                },
                {
                    name:'宁围镇',
                    value:20
                },
                {
                    name:'浦阳镇',
                    value:20
                },
                {
                    name:'前进街道',
                    value:20
                },
                {
                    name:'蜀山街道',
                    value:20
                },
                {
                    name:'所前镇',
                    value:20
                },
                {
                    name:'围垦区',
                    value:20
                },
                {
                    name:'闻堰镇',
                    value:20
                },
                {
                    name:'萧山经济技术开发区',
                    value:20
                },
                {
                    name:'萧山空港经济区',
                    value:20
                },
                {
                    name:'萧山商业城',
                    value:20
                },
                {
                    name:'新街镇',
                    value:20
                },
                {
                    name:'新塘街道',
                    value:20
                },
                {
                    name:'新湾街道',
                    value:20
                },
                {
                    name:'衙前镇',
                    value:20
                },
                {
                    name:'义蓬街道',
                    value:20
                },
                {
                    name:'义桥镇',
                    value:20
                },
                {
                    name:'益农镇',
                    value:20
                }
            ],
            markPoint:{//图形标注

                label:{
                    show:true,
                    color:'#034159',
                    fontSize:14,
                    position: 'bottom',
                    distance:-8,
                    align:'center',
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize:14
                        }
                    }
                  },
              
                data:[
                    //防控示范基地
                    {   
                        name:'益农镇',
                        value:'',
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.1916138888889,30.05651111111111]
                    
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.151536111111,30.0885027777777]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.196130555555,30.0014388888888]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.231619444444,30.0328472222222]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.193552777777,30.0027027777777]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.194508333333,29.9587416666666]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.326238888888,29.9998166666666]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.134077777777,29.8895555555555]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.219638888888,30.0148138888888]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.614138888888,30.3490305555555]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.524708333333,30.1785888888888]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.608983333333,30.218675]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.558769444444,30.2365472222222]   
                    },
                    {   
                        symbol:'image://images/sfjdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.541858333333,30.1982555555555]   
                    },






                    //植保站
                    {   
                        name:'北干街道',
                        value:'',
                        symbol:'image://images/zbzPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.27,30.16]
                    
                    },
                    // 监测点
                    {   
                        name:'城厢街道',
                        value:'',
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.28,30.06]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.19,30.03]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.28,29.94]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.53,30.18]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.55,30.16]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.49,30.23]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.51,30.31]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.263576,30.113489]
                    },
                    {   
                        symbol:'image://images/jcdPoint.png',
                        symbolSize:50,
                        symbolOffset:[0,'-50%'],
                        coord:[120.222997,30.028961]
                    }
                ]
             }

        }]

    }

    

    myChart.setOption(option,true);
    myChart.on('click', function (params) {
        console.log(params)
        var v = params.event.target.style.lineWidth;
        // if(v = 2){
        //     $(this).name
        // }

    });

   
},"json");



