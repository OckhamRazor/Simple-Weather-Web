/**
 * Created by baobaobao on 2016/8/25.
 */
import React from 'react';
//css
require('./Search.css');

var PropTypes = React.PropTypes;

function Search(props) {
    return (
        <div className="search-form">
            <form onSubmit={props.onSubmitCity}>
                <input className="search-input" type="text" placeholder="例如：杭州"
                    value={props.cityname}
                    onChange={props.onUpdateCity}
                />
                <input className="button button-green" type="submit" value="Get Weather"/>
            </form>
        </div>
    );
}

Search.propTypes = {
    cityname: PropTypes.string.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    onSubmitCity: PropTypes.func.isRequired
};

module.exports = Search;