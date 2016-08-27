/**
 * Created by baobaobao on 2016/8/25.
 */

import React from 'react';
//css
require('./WeatherContainer.css');
//components
var WeatherWeek = require('../../components/WeatherWeek/WeatherWeek');
var Error = require('../../components/Error/Error');
var Loading = require('../../components/Loading/Loading');
//utils
var weatherAPI = require('../../utils/weatherAPI');
//emitter
var myEmitter = require('./../../utils/Emitter');


var WeatherContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            error: true,
            weatherInfo: [],
        }
    },
    //fetch data from end
    getData: function (cityname) {
        weatherAPI.getWeather(cityname)
            .then((data) => {
                //判断是否取回有效的数据
                if (data.error_code === 0){
                    this.setState({
                        isLoading: false,
                        error: false,
                        weatherInfo: data.result.data.weather,
                    });
                }else{
                    this.setState({
                        isLoading: false,
                        error: true,
                        weatherInfo: data
                    });
                }
            });
    },
    componentDidMount: function () {
        var query = this.props.location.query.cityname;
        this.getData(query);

        myEmitter.emitter.on('search', myEmitter.listener = (args) => {
            this.setState({
               isLoading: true
            });
            this.getData(args);
        });
    },
    componentWillUnmount: function () {
        myEmitter.emitter.off('search',myEmitter.listener)
    },
    render: function () {
        if (this.state.isLoading){
            return (
                <div className="loading-tips">
                    <Loading/>
                </div>
            );
        }

        if(this.state.error){
            return (
                <Error errorInfo={this.state.weatherInfo}/>
            );
        }else {
            return (
                <div>
                    <div className="weather-date-select">
                        <h2>{this.props.location.query.cityname}</h2>
                        <p>Select a day</p>
                    </div>
                    <WeatherWeek weatherWeek={this.state.weatherInfo}/>
                </div>
            );
        }
    }
});

module.exports = WeatherContainer;

