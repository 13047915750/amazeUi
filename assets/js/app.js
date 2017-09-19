$(function() {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });
        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
        var dataType = $('body').attr('data-type');
        for (key in pageData) {
            if (key == dataType) {
                pageData[key]();
            }
        }
        $('.tpl-switch').find('.tpl-switch-btn-view').on('click', function() {
            $(this).prev('.tpl-switch-btn').prop("checked", function(){
                    if ($(this).is(':checked')){
                        return false
                    } else {
                        return true
                    }
                })
        })
    })
    // ==========================
    // 侧边导航下拉列表
    // ==========================
$('.tpl-left-nav-link-list').on('click', function() {
        $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(80)
            .end()
            .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
    })
    // ==========================
    // 头部导航隐藏菜单
    // ==========================
$('.tpl-header-nav-hover-ico').on('click', function() {
    $('.tpl-left-nav').toggle();
    $('.tpl-content-wrapper').toggleClass('tpl-content-wrapper-hover');
})
// 页面数据
var pageData = {
    'index': function indexData() {
        var echartsA = echarts.init(document.getElementById('tpl-echarts-A'));
        option = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['普通患者', '用户患者','医生']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                    name: '普通患者',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210,210,152,55,150,20],
                    itemStyle: {
                        normal: {
                            color: '#59aea2'
                        },
                        emphasis: {
                        }
                    }
                },
                {
                    name: '用户患者',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210,210,152,55,150,20],
                    itemStyle: {
                        normal: {
                            color: '#e7505a'
                        }
                    }
                },
                {
                    name: '医生',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210,210,152,55,150,20],
                    itemStyle: {
                        normal: {
                            color: '#32c5d2'
                        }
                    }
                }
            ]
        };
        echartsA.setOption(option);
        var echartsC = echarts.init(document.getElementById('tpl-echarts-C'));
        optionC = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['用户测试量柱状', '医生测试量柱状', '用户测试曲线','医生测试量曲线']
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                name: '测试量柱状',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 人次'
                }
            },
                {
                    type: 'value',
                    name: '',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 人次'
                    }
                }
                ,
                {
                    type: 'value',
                    name: '测试量曲线',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 人次'
                    }
                }
                ,
                {
                    type: 'value',
                    name: '',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 人次'
                    }
                }
            ],
            series: [{
                name: '用户测试量柱状',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
                {
                    name: '医生测试量柱状',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '用户测试曲线',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }
                ,
                {
                    name: '医生测试量曲线',
                    type: 'line',
                    yAxisIndex: 3,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        echartsC.setOption(optionC);
    },
    // ===============================================
    // 图表页
    // ===============================================
    'chart': function chartData() {
        option = {
            backgroundColor: '#1b1b1b',
            color: ['gold','aqua','lime'],
            title : {
                text: '用户变化',
                subtext:'app数据模拟',
                x:'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['深圳'],
                selectedMode: 'single',
                selected:{
                    '上海 Top10' : false,
                    '广州 Top10' : false
                },
                textStyle : {
                    color: '#fff'
                }
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataRange: {
                min : 0,
                max : 100,
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name: '全国',
                    type: 'map',
                    roam: true,
                    hoverable: false,
                    mapType: 'china',
                    itemStyle:{
                        normal:{
                            borderColor:'rgba(100,149,237,1)',
                            borderWidth:0.5,
                            areaStyle:{
                                color: '#1b1b1b'
                            }
                        }
                    },
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],
                        symbolSize : 1,
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:1,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'包头'}]
                        ],
                    },
                    geoCoord: {
                        '韶关': [113.7964,24.7028]
                    }
                },
                {
                    name: '北京 Top10',
                    type: 'map',
                    mapType: 'china',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'北京'}, {name:'上海',value:95}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            },
                            emphasis: {
                                label:{position:'top'}
                            }
                        },
                        data : [
                            {name:'上海',value:95},
                            {name:'广州',value:90},
                            {name:'大连',value:80},
                            {name:'南宁',value:70},
                            {name:'南昌',value:60},
                            {name:'拉萨',value:50},
                            {name:'长春',value:40},
                            {name:'包头',value:30},
                            {name:'重庆',value:20},
                            {name:'常州',value:10}
                        ]
                    }
                },
                {
                    name: '上海',
                    type: 'map',
                    mapType: 'china',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'上海'},{name:'包头',value:95}],
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            },
                            emphasis: {
                                label:{position:'top'}
                            }
                        },
                        data : [
                            {name:'包头',value:95},
                        ]
                    }
                },
                {
                    name: '广州 Top10',
                    type: 'map',
                    mapType: 'china',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'广州'},{name:'福州',value:95}],
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            },
                            emphasis: {
                                label:{position:'top'}
                            }
                        },
                        data : [
                            {name:'福州',value:95},
                            {name:'太原',value:90},
                            {name:'长春',value:80},
                            {name:'重庆',value:70},
                            {name:'西安',value:60},
                            {name:'成都',value:50},
                            {name:'常州',value:40},
                            {name:'北京',value:30},
                            {name:'北海',value:20},
                            {name:'海口',value:10}
                        ]
                    }
                }
            ]
        };

        var echartsC = echarts.init(document.getElementById('tpl-echarts-C'));
        optionC = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar']},
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['蒸发量', '降水量', '平均温度']
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [{
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        echartsC.setOption(optionC);
    }
}