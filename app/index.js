/**
 * Created by baobaobao on 2016/8/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//pack the favicon.ico
require('../assets/favicon/favicon.ico');

//css
require('./main.css');
//routes
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);