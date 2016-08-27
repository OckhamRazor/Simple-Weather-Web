/**
 * Created by baobaobao on 2016/8/26.
 */
//emitter
var ee = require('event-emitter');
var emitter = ee({}), listener;

var myEmitter = {
    emitter: emitter,
    listener: listener
};

module.exports = myEmitter;