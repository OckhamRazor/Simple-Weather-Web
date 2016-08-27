/**
 * Created by baobaobao on 2016/8/26.
 */
import React from 'react';
//css
require('./WeatherDay.css');

var PropTypes = React.PropTypes;

function WeatherDay(props) {
    const src = ['cloud','rain','sun'];
    let weatherImgUrl = '';
    if (props.weather.info.day[1].indexOf('晴') !== -1) {
        weatherImgUrl = '/assets/images/'+src[2]+'.svg';
    }else if (props.weather.info.day[1].indexOf('云') !== -1 || props.weather.info.day[1].indexOf('阴') !== -1){
        weatherImgUrl = '/assets/images/'+src[0]+'.svg';
    }else{
        weatherImgUrl = '/assets/images/'+src[1]+'.svg';
    }

    return (
        <div className="weather-box" onClick={props.getDetails(props.weather)}>
            <img alt={props.weather.info.day[1]} src={weatherImgUrl}/>
            <div className="weather-box-date">
                <span>{props.date.dayOfWeek+', '}</span>
                <span> {props.date.month+' '} </span>
                <span>{props.date.day}</span>
            </div>
        </div>
    );
}

WeatherDay.propTypes = {
    date: PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired,
    getDetails: PropTypes.func
};

module.exports = WeatherDay;