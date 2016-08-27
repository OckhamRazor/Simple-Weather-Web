/**
 * Created by baobaobao on 2016/8/27.
 */
import React from 'react';
//css
require('./PartDetails.css');
var PropTypes = React.PropTypes;

function PartDetails(props) {
    return (
        <div className="part-details-container">
            <h3>{props.time}</h3>
            <ul className="part-details-list">
                <li><span className="part-details-item-title">整体天气： </span>{props.details[1]}</li>
                <li><span className="part-details-item-title">温度： </span>{props.details[2]}</li>
                <li><span className="part-details-item-title">风向：</span>{props.details[3]}</li>
                <li><span className="part-details-item-title">风级：</span>{props.details[4]}</li>
            </ul>
        </div>
    );
}

PartDetails.propTypes = {
    time: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired
};

module.exports = PartDetails;