import React from 'react';
import "./notFound.css";
import NotFoundImage from "../../../utils/images/nF.png";

// import PropTypes from 'prop-types';

// NotFound.propTypes = {
    
// };

function NotFound(props) {
    return (
        <div id="page_notfound">
            <img src={NotFoundImage} alt="Not Found"/>
        </div>
    );
}

export default NotFound;