/**
 * Created by baobaobao on 2016/8/25.
 */
//import axios from 'axios';
//websocket
//var socket = io();
//测试数据
const WEATHER_DATA = {
    "reason":"successed!",
    "result":{
        "data":{
            "realtime":{
                "city_code":"101210101",
                "city_name":"杭州",
                "date":"2016-08-26",
                "time":"09:00:00",
                "week":5,
                "moon":"七月廿四",
                "dataUptime":1472174244,
                "weather":{
                    "temperature":"30",
                    "humidity":"72",
                    "info":"多云",
                    "img":"1"
                },
                "wind":{
                    "direct":"东北风",
                    "power":"2级",
                    "offset":null,
                    "windspeed":null
                }
            },
            "life":{
                "date":"2016-8-26",
                "info":{
                    "chuanyi":[
                        "炎热",
                        "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。"
                    ],
                    "ganmao":[
                        "少发",
                        "各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。"
                    ],
                    "kongtiao":[
                        "部分时间开启",
                        "您将感到些燥热，建议您在适当的时候开启制冷空调来降低温度，以免中暑。"
                    ],
                    "wuran":[
                        "中",
                        "气象条件对空气污染物稀释、扩散和清除无明显影响，易感人群应适当减少室外活动时间。"
                    ],
                    "xiche":[
                        "较适宜",
                        "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
                    ],
                    "yundong":[
                        "较适宜",
                        "天气较好，户外运动请注意防晒。推荐您进行室内运动。"
                    ],
                    "ziwaixian":[
                        "强",
                        "紫外线辐射强，建议涂擦SPF20左右、PA++的防晒护肤品。避免在10点至14点暴露于日光下。"
                    ]
                }
            },
            "weather":[
                {
                    "date":"2016-08-26",
                    "info":{
                        "day":[
                            "0",
                            "晴",
                            "34",
                            "东北风",
                            "微风",
                            "05:32"
                        ],
                        "night":[
                            "1",
                            "多云",
                            "25",
                            "东北风",
                            "微风",
                            "18:29"
                        ]
                    },
                    "week":"五",
                    "nongli":"七月廿四"
                },
                {
                    "date":"2016-08-27",
                    "info":{
                        "dawn":[
                            "1",
                            "多云",
                            "25",
                            "东北风",
                            "微风",
                            "18:29"
                        ],
                        "day":[
                            "3",
                            "阵雨",
                            "31",
                            "北风",
                            "3-4 级",
                            "05:33"
                        ],
                        "night":[
                            "3",
                            "阵雨",
                            "24",
                            "北风",
                            "3-4 级",
                            "18:28"
                        ]
                    },
                    "week":"六",
                    "nongli":"七月廿五"
                },
                {
                    "date":"2016-08-28",
                    "info":{
                        "dawn":[
                            "3",
                            "阵雨",
                            "24",
                            "北风",
                            "3-4 级",
                            "18:28"
                        ],
                        "day":[
                            "2",
                            "阴",
                            "31",
                            "西北风",
                            "4-5 级",
                            "05:33"
                        ],
                        "night":[
                            "1",
                            "多云",
                            "23",
                            "北风",
                            "4-5 级",
                            "18:26"
                        ]
                    },
                    "week":"日",
                    "nongli":"七月廿六"
                },
                {
                    "date":"2016-08-29",
                    "info":{
                        "dawn":[
                            "1",
                            "多云",
                            "23",
                            "北风",
                            "4-5 级",
                            "18:26"
                        ],
                        "day":[
                            "0",
                            "晴",
                            "32",
                            "北风",
                            "3-4 级",
                            "05:34"
                        ],
                        "night":[
                            "0",
                            "晴",
                            "22",
                            "北风",
                            "微风",
                            "18:25"
                        ]
                    },
                    "week":"一",
                    "nongli":"七月廿七"
                },
                {
                    "date":"2016-08-30",
                    "info":{
                        "dawn":[
                            "0",
                            "晴",
                            "22",
                            "北风",
                            "微风",
                            "18:25"
                        ],
                        "day":[
                            "0",
                            "晴",
                            "33",
                            "北风",
                            "微风",
                            "05:35"
                        ],
                        "night":[
                            "0",
                            "晴",
                            "22",
                            "北风",
                            "微风",
                            "18:24"
                        ]
                    },
                    "week":"二",
                    "nongli":"七月廿八"
                }
            ],
            "pm25":{
                "key":"Hangzhou",
                "show_desc":0,
                "pm25":{
                    "curPm":"55",
                    "pm25":"37",
                    "pm10":"50",
                    "level":2,
                    "quality":"良",
                    "des":"可以接受的，除极少数对某种污染物特别敏感的人以外，对公众健康没有危害。"
                },
                "dateTime":"2016年08月26日09时",
                "cityName":"杭州"
            },
            "jingqu":"",
            "date":"",
            "isForeign":"0"
        }
    },
    "error_code":0
};
const ERROR_DATA = {
    "resultcode":"202",
    "reason":"查询不到该城市的信息",
    "result":null,
    "error_code":207302
};

function getWeatherAllInfo(cityname) {
    //模拟从后台获取数据
    if (cityname==='hello'){
        return new Promise(function (resolve,reject) {
            resolve(WEATHER_DATA);
        });
    }

    return new Promise(function (resolve,reject) {
               resolve(ERROR_DATA);
            });

    // socket.emit('weather',{
    //     cityname: cityname
    // });
    // return new Promise(function (resolve,reject) {
    //             socket.on('weather', function (data) {
    //                 if (data){
    //                     let weatherInfo = JSON.parse(data.weather);
    //                     resolve(weatherInfo);
    //                 }else{
    //                     reject();
    //                 }
    //             });
    //         });
}



var weatherAPI =  {
    getWeather: function (cityname) {
        return getWeatherAllInfo(cityname)
            .then(function (data) {
                return data;
            }).catch(function (err) {
                console.error('Error WebSocket: '+err);
            });
    }
};

module.exports = weatherAPI;

