$(function(){
  setInterval(updateTime, 1000);
  updateTime();
  function updateTime() {
      var date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.date = date.getDate();
      this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
      this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      var currentTime =  this.year + "." + this.month + "." + this.date + " " + this.day+ " "+this.hour + ":" + this.minute + ":" + this.second  ;
      $("#date").html(currentTime);
  }

  //开始时所有的图表数据
  function addEcharts(){
    leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,11000,12900,6500],"echartsOne");

    leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,9000,12900,6500],"RechartsOne");

    rightFb2([07,08,09,10,11,12,13,14,15,16,17,18],[800,500,400,900, 800, 700, 600, 500, 400,500,400,800],[1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]);

    salePic(["09",10,11,12,13,14,15,16,17,18],[80,84,50,55,90,100,56,92,40,90],[40,60,56,45,35,65,75,90,75,65]);

    rightThree([14,15,16,17,18],[1000,1500,1500,1800,1500],[1450,1200,2100,2500,2100]);
  }
  addEcharts();
  
  // //病虫害测报情况  左图一  点击更换地点
  // var flag = true;
  // $(".StartSelect").on("click",function(){
  //   if(flag) {
  //     $(this).nextAll(".sUl").eq(0).show();
  //     liClick();
  //   }else{
  //     $(this).nextAll(".sUl").eq(0).hide();
  //   }
  //   flag = !flag;
  // })
  // function liClick(){
  //   $(".sUl li").on("click",function(){
  //     $(this).addClass("activeR").siblings().removeClass("activeR");
  //     $(".sUl").hide();
  //     $(".StartSelectSpan").html($(this).html());
  //     leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,9000,12900,6500],"RechartsOne");
  //   })
  // }
  
})




//病虫害测报情况  左图一  点击更换地点
var flag = true;
$(".StartSelect").on("click",function(){
  if(flag) {
    $(this).nextAll(".sUl").eq(0).show();
    // liClick();
  }else{
    $(this).nextAll(".sUl").eq(0).hide();
  }
  flag = !flag;
})
function liClick(index){
  if(index == 1 || index == 2 || index == 3 || index == 4){
    $(".li" + index).addClass("activeR").siblings().removeClass("activeR");
    $(".sUl").hide();
    $(".StartSelectSpan1").html($(".li" + index).html());
  }else if(index == 5 || index == 6 || index == 7 || index == 8){
    $(".li" + index).addClass("activeR").siblings().removeClass("activeR");
    $(".sUl").hide();
    $(".StartSelectSpan2").html($(".li" + index).html());
  }else{
    $(".li" + index).addClass("activeR").siblings().removeClass("activeR");
    $(".sUl").hide();
    $(".StartSelectSpan3").html($(".li" + index).html());
  }
  
  
  if(index == 1){
    leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,9000,12900,6500],"RechartsOne");
  }else if(index == 2 || index == 3 || index == 4){
    leftFb1([12,13,14,15,16,17,18],[3000,11000,8000,5000,2000,12900,6500],"RechartsOne");
  }else if(index == 5 || index == 6 || index == 7 || index == 8){
    salePic(["09",10,11,12,13,14,15,16,17,18],[80,84,50,55,90,100,56,92,40,90],[40,60,56,45,35,65,75,90,75,65]);
  }else if(index == 9 || index == 10 || index == 11 || index == 12){
    rightThree([14,15,16,17,18],[1000,1500,1500,1800,1500],[1450,1200,2100,2500,2100]);
  }
}





//左边点击切换 种类/虫害
function LeftBtn(index){
  //左图一数据变动
  if(index == 1){
    $(".lineBoxImg1").attr("src","../images/left1.png");
    $(".rice").addClass("activeN").siblings().removeClass("activeN");
    leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,11000,12900,6500],"echartsOne");
  }else if(index == 2){
    $(".lineBoxImg1").attr("src","../images/left2.png");
    $(".vegetables").addClass("activeN").siblings().removeClass("activeN");
    leftFb1([12,13,14,15,16,17,18],[11000,9000,6000,5000,11000,12900,4500],"echartsOne");
  }
  //右图一数据变动
  else if(index == 3){
    $(".lineBoxImg2").attr("src","../images/right1.png");
    $(".worm1").addClass("activeN").siblings().removeClass("activeN");
    leftFb1([12,13,14,15,16,17,18],[9000,11000,8000,5000,9000,12900,6500],"RechartsOne");
  }else if(index == 4){
    $(".lineBoxImg2").attr("src","../images/right2.png");
    $(".leaf1").addClass("activeN").siblings().removeClass("activeN");
    leftFb1([12,13,14,15,16,17,18],[11000,6000,8000,5000,9000,12900,6500],"RechartsOne");
  }else if(index == 5){
    $(".lineBoxImg2").attr("src","../images/right3.png");
    $(".illness1").addClass("activeN").siblings().removeClass("activeN");
    leftFb1([12,13,14,15,16,17,18],[4000,11000,4000,11000,9000,12900,6500],"RechartsOne");
  } 
  //右图二数据变动
  else if(index == 6){
    $(".lineBoxImg3").attr("src","../images/right1.png");
    $(".worm2").addClass("activeN").siblings().removeClass("activeN");
    salePic(["09",10,11,12,13,14,15,16,17,18],[80,84,50,55,90,100,56,92,40,90],[40,60,56,45,35,65,75,90,75,65]);
  }else if(index == 7){
    $(".lineBoxImg3").attr("src","../images/right2.png");
    $(".leaf2").addClass("activeN").siblings().removeClass("activeN");
    salePic(["09",10,11,12,13,14,15,16,17,18],[80,84,50,55,90,100,56,92,40,90],[10,80,26,45,35,65,5,90,75,65]);
  }else if(index == 8){
    $(".lineBoxImg3").attr("src","../images/right3.png");
    $(".illness2").addClass("activeN").siblings().removeClass("activeN");
    salePic(["09",10,11,12,13,14,15,16,17,18],[80,84,50,55,90,100,56,92,40,90],[70,10,56,45,35,65,75,90,75,65]);
  } 
}


// 左图一  绿色防控示范基地情况 / 病虫害测报情况
function leftFb1(data,arr,id){
  var echartsLineArea3 = echarts.init(document.getElementById(id)); 
  optionLineArea3 = {
      tooltip: {
        trigger: 'axis',
        formatter:function(params){
            return "20" + params[0].name+ "年" +"<br />"+params[0].data
        },
      },
      grid:{ //图形位移
        left: 55,
        right:20,
        top:10,
        bottom:20,
      },
      calculable : true,
      xAxis : [
          { 
              type : 'category',
              boundaryGap : false,
              // name:'年份',
              data : data,
              axisLine: {
                show:false,
                  lineStyle: {
                      type: 'solid',
                      color: '#c1c2c9',//坐边线的颜色
                      width:'1'//坐标线的宽度
                  }
              },
              axisTick:{
                show:false                   
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
                        type: 'solid',
                        color: '#0a2354',//坐边线的颜色
                        width:'1'//坐标线的宽度
                    }
                },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#c1c2c9'
                  }
              },
              axisLine: {
                show:false,
              },
              color:'rgba( 255, 255, 255, 0.2 )',
              axisTick:{ 
                  inside:{
                      show:true //x轴刻度线 
                  }                    
                },

          }
      ],
      series : [
          {
              name:'户数',
              type:'line',
              // symbol:"none",//去掉悬浮点
              smooth:true,
              emphasis:{
                itemStyle:{
                  borderWidth:3,
                  color:"rgb(0,209,206)"
                }
              },
              itemStyle: {normal: { 
                  borderColor: "white",
                  areaStyle: {
                      type: 'default',
                      color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#00b1b6'},
                          {offset: 1, color: '#001037'}
                      ]),
                      opacity:0.4
                  },
                  lineStyle:{
                      color:'#02eaf9',
                      width:'2',
                  }
              },
              },
              animationDelay: function (idx) {
                  return idx * 10;
              },
              data:arr
          },      
      ]
  };
    echartsLineArea3.clear();
    echartsLineArea3.clear();
    echartsLineArea3.setOption(optionLineArea3);
}
//左图二  统防统治作业队情况
function rightFb2(data,arr,maxMounth){
  var echartsLineArea2 = echarts.init(document.getElementById('echartsTwo')); 
  optionLineArea2 = {
    tooltip: {
      trigger: 'axis',
      formatter:function(params){
          return "20" + params[1].name+ "年" +"<br />"+params[1].data
      },
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {  //图形位移
      left: 15,
      right:20,
      top:10,
      bottom:20,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: data,
        axisLine: {
          show:false,
            lineStyle: {
                type: 'solid',
                color: '#c1c2c9',//坐边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisTick:{ 
          show:false                   
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
        // splitLine:{show: false},//去除网格线
        splitLine:{
            show: true,
            lineStyle: {
                  type: 'solid',
                  color: '#0a2354',//坐边线的颜色
                  width:'1'//坐标线的宽度
              }
          },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#c1c2c9'
            }
        },
        axisLine: {
          show:false,
        },
        color:'rgba( 255, 255, 255, 0.2 )',
        axisTick:{ 
            inside:{
                show:true //x轴刻度线 
            }                    
          },
      }
    ],
    series : [
      {
          type: 'bar',
          itemStyle: {
              normal: {
                  barBorderRadius:[0, 0, 0, 0],
                  color: '#303e8c'
              }
          },
          silent: true,
          barWidth: 14,
          z:1,
          barGap: '-100%', // Make series be overlap
          data: maxMounth
      },{
            name:'农户',
            type:'bar',
            barWidth: '14',
            data:arr,
            itemStyle: {                      
               normal: {
                  barBorderRadius:[50, 50, 50, 50],
                     // 添加渐变颜色
                      color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#00fef0'},
                          {offset: 1, color: '#0572e9'}
                      ])
                     
             },

          },
        }
    ],
  };

     echartsLineArea2.clear();

  echartsLineArea2.setOption(optionLineArea2);

} 
//右图二 / 病虫害测报情况
function salePic(data,lineData,val) {
  var echartoption = echarts.init(document.getElementById('RechartsTwo'));
  var option = {
      legend: {
        left:20,
          data:['虫量','产量'],
          textStyle:{
              color:'rgb( 152, 155, 158 )',
              fontSize:'12',
          },
          itemGap:22,//各个item之间的间隔
          itemWidth:17,//图例图形宽度
          itemHeight:7//图例图形高度
      },
      grid: {
          left:35,
          top: 20,
          bottom: 30,
      },
      tooltip: {
          trigger: 'axis',
          formatter:function(params){
            return "20" + params[1].name+ "年" + "<br>"+params[0].data +
            "<br>"+params[1].data
          },
          axisPointer: {
              type: 'shadow'
          }
        },
      xAxis: {
        boundaryGap : false,
          data: data,
          axisLine: {
              show: false //隐藏X轴轴线
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#cccccc" //X轴文字颜色
              }
          },
      },
      yAxis: [{
        type : 'value',
        splitLine:{
            show: true,
            lineStyle: {
                  type: 'solid',
                  color: '#0a2354',//坐边线的颜色
                  width:'1'//坐标线的宽度
              }
          },
        axisLabel: {
            show: false,
        },
        axisLine: {
          show:false,
        },
        color:'rgba( 255, 255, 255, 0.2 )',
        axisTick:{ 
            inside:{
                show:true //x轴刻度线 
            }                    
          },
        }
      ],
      series: [
          {
            name:"虫量",
              type: "line",
              smooth: true, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 0, //标记的大小
              itemStyle: {normal: {
                borderColor: "white",
                  areaStyle: {
                      type: 'default',
                      color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#f8377c'},
                          {offset: 1, color: '#011b4a'}
                      ]),
                      opacity:0.4
                  },
                  lineStyle:{
                      color:'#fd377d',
                      width:'2'
                  }
                }
              },
              data: val
          },
          {
            name:"产量",
            type: "bar",
            barWidth: 12,
            itemStyle: {                      
              normal: {
                barBorderRadius:[50, 50, 50, 50],
                // 添加渐变颜色
                color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#00fef0'},
                    {offset: 1, color: '#0572e9'}
                ])                
              },
           },
              data: lineData
          },
      ]
  };
  echartoption.clear();
  echartoption.hideLoading();    //隐藏加载动画
  echartoption.setOption(option);//加载数据图表
}

//右图三 / 病虫害测报情况
function rightThree(data,valData,val) {
  var echartoption = echarts.init(document.getElementById('RechartsThree'));
  var option={
    tooltip: {
      trigger: 'axis',
      formatter:function(params){
          return "20" + params[0].name+ "年" +"<br />"+params[0].data+"<br />"+params[1].data
      },
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {  //图形位移
      left: 15,
      right:20,
      top:50,
      bottom:20,
        containLabel: true
    },
      legend: {
        left:20,
          data:['资产总计','负债及所有者权益合计'],
          textStyle:{
              color:'rgb( 152, 155, 158 )',
              fontSize:'12',
          },
          itemGap:22,//各个item之间的间隔
          itemWidth:17,//图例图形宽度
          itemHeight:7//图例图形高度
      },
      xAxis: {
        type: 'category',
        data: data,
        axisLine: {
          show:false,
            lineStyle: {
                type: 'solid',
                color: '#c1c2c9',//坐边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisTick:{ 
          show:false                   
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
          // splitLine:{show: false},//去除网格线
          splitLine:{
              show: true,
              lineStyle: {
                    type: 'solid',
                    color: '#0a2354',//坐边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
          axisLabel: {
              show: true,
              textStyle: {
                  color: '#c1c2c9'
              }
          },
          axisLine: {
            show:false,
          },
          color:'rgba( 255, 255, 255, 0.2 )',
          axisTick:{ 
              inside:{
                  show:true //x轴刻度线 
              }                    
            },
        }
      ],
      series : [
      {
          type:'bar',
          name:'资产总计',
          barGap:'0%',//柱间距离
          barWidth :12,//柱图宽度
          data: valData,
          itemStyle: {                      
            normal: {
              barBorderRadius:[50, 50, 50, 50],
              // 添加渐变颜色
              color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: '#fc377c'},
                  {offset: 1, color: '#861f44'}
            ])     
          },
       },
      },
      {
          name:'负债及所有者权益合计',
          type:'bar',
          barGap:'0%',
          barWidth :12,
          data: val,
          itemStyle: {                      
            normal: {
              barBorderRadius:[50, 50, 50, 50],
              // 添加渐变颜色
              color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: '#00fef0'},
                  {offset: 1, color: '#0572e9'}
            ])     
          },

       },
      }
    ]
  }
  echartoption.clear();
  echartoption.hideLoading();    //隐藏加载动画
  echartoption.setOption(option);//加载数据图表
}