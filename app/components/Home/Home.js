/**
 * Created by baobaobao on 2016/8/25.
 */
import React from 'react';
//css
require('./Home.css');
//components
var SearchContainer = require('../../container/SearchContainer/SearchContainer');

var Home = React.createClass({
    render: function () {
        return (
            <div className="home-page">
                <div className="home-page-content">
                    <h1>Enter a City or State</h1>
                    <SearchContainer/>
                </div>
            </div>
        );
    }
});

module.exports = Home;

