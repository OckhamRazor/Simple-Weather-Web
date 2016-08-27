/**
 * Created by baobaobao on 2016/8/26.
 */
import React from 'react';
//css
require('./WeatherWeek.css');
//components
var WeatherDay = require('../../components/WeatherDay/WeatherDay');
//utils
import {formatDate} from '../../utils/formatData';

var WeatherWeek = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDetails: function (weatherInfo) {
        return () => {
            this.context.router.push({
                pathname: '/details',
                state: {
                    details: weatherInfo
                }
            });
        }
    },
    render: function () {
        return (
            <div className="weather-week-box">
                {
                    this.props.weatherWeek.map((item,index) => {
                        var date = formatDate(item.date);
                        return (
                            <WeatherDay key={index}
                                        date={date}
                                        weather={item}
                                        getDetails={this.getDetails}/>
                        );
                    })
                }
            </div>
        );
    }
});

module.exports = WeatherWeek;

