/**
 * Created by baobaobao on 2016/8/27.
 */

import React from 'react';
//components
var Details = require('../../components/Details/Details');
var Loading = require('../../components/Loading/Loading');



var DetailsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            details: {}
        }
    },
    componentDidMount: function () {
        var details = this.props.location.state.details;
        this.setState({
            isLoading: false,
            details: details
        });
    },
    render: function () {
        if (this.state.isLoading){
            return (
                <div className="loading-tips">
                    <Loading/>
                </div>
            );
        }else {
            return (
                <div>
                    <Details details={this.state.details}/>
                </div>
            );
        }
    }
});

module.exports = DetailsContainer;

