/**
 * Created by baobaobao on 2016/8/25.
 */

import React from 'react';

//components
var Search =require('../../components/Search/Search');
//emitter
var myEmitter = require('../../utils/Emitter');
// require.ensure([],function (require) {
//     var myEmitter =  require('./../../utils/Emitter');
// });

var SearchContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            cityname: ''
        }
    },
    //handle event
    handleSubmitCity: function (e) {
        e.preventDefault();

        this.context.router.push({
            pathname: '/weather',
            query: {
                cityname: this.state.cityname
            }
        });
        //触发搜索事件，把城市名传给另一个独立的组件
        myEmitter.emitter.emit('search',this.state.cityname);
        this.setState({
            cityname: ''
        });
    },
    handleUpdateCity: function (e) {
        this.setState({
            cityname: e.target.value
        });
    },
    render: function () {
        return (
            <Search
                cityname={this.state.cityname}
                onUpdateCity={this.handleUpdateCity}
                onSubmitCity={this.handleSubmitCity}
            />
        );
    }
});

module.exports = SearchContainer;

