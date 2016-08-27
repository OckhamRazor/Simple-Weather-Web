/**
 * Created by baobaobao on 2016/8/26.
 */
import React from 'react';
//css
require('./Error.css');

var PropTypes = React.PropTypes;

function Error(props) {
    return (
        <div className="error-result">
            <p>{props.errorInfo.reason}</p>
        </div>
    );
}

Error.propTypes = {
    errorInfo: PropTypes.object.isRequired
};

module.exports = Error;