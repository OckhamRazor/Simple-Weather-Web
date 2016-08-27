/**
 * Created by baobaobao on 2016/8/25.
 */
const superagent = require('superagent');
const socket_io = require('socket.io');

const HOST = 'https://op.juhe.cn/onebox/weather/query';
const dtype = 'json';
const KEY = '5672fe3cdfba73d57c7284d13b3c29e4';

function weatherAPI(server) {
    const io = socket_io(server);
    io.on('connection', function(socket){
        console.log('connection');
        //监听weather请求
        socket.on('weather', function (data,callback) {
            var cityname = data.cityname;
            var url = HOST+'?cityname='+encodeURI(cityname)+'&dtype='+dtype+'&key='+KEY;
            superagent
                .get(url)
                .end(function (err,data) {
                    socket.emit('weather',{
                        weather:data.text
                    });
                });
        });

        //监听断开连接请求
        socket.on('disconnect',function () {
            console.log('disconnect');
        });
    });
}

module.exports = weatherAPI;
