/**
 * Created by baobaobao on 2016/8/25.
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//components
var Main = require('../components/Main/Main');
var Home = require('../components/Home/Home');
var WeatherContainer = require('../container/WeatherContainer/WeatherContainer');
var DetailsContainer = require('../container/DetailsContainer/DetailsContainer');

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute components={Home}/>
            <Route path='weather' components={WeatherContainer}/>
            <Route path='details' components={DetailsContainer}/>
        </Route>
    </Router>
);

module.exports = routes;