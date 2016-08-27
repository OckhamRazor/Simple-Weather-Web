/**
 * Created by baobaobao on 2016/8/25.
 */

import React from 'react';
//css
require('./Main.css');
//components
var SearchContainer = require('../../container/SearchContainer/SearchContainer');


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="search-container">
                    <div className="search-bar">
                        <h2 className="search-bar-title">Weather Search</h2>
                        <SearchContainer/>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

