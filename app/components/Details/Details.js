/**
 * Created by baobaobao on 2016/8/27.
 */
import React from 'react';

var PropTypes = React.PropTypes;
//css
require('./Details.css');
//components
var WeatherDay = require('../../components/WeatherDay/WeatherDay');
var PartDetails = require('../../components/PartDetails/PartDetails');
//utils
import {formatDate} from '../../utils/formatData';

function Details(props) {
    return (
        <div className="details-container">
            <WeatherDay date={formatDate(props.details.date)} weather={props.details} getDetails={function () {}}/>
            <div className="details-content">
                {props.details.info.dawn && <PartDetails time="早晨" details={props.details.info.dawn}/>}
                {props.details.info.day && <PartDetails time="白天" details={props.details.info.day}/>}
                {props.details.info.night && <PartDetails time="晚上" details={props.details.info.night}/>}
            </div>
        </div>
    );
}

Details.propTypes = {
    details: PropTypes.object.isRequired
};

module.exports = Details;