import React from "react";
import PropTypes from 'prop-types';

const Button = ({classes, btnType, btnName, btnHandler}) => {
    return(
        <button 
            className={`btn ${classes}`}
            type={btnType ? btnType : 'button'}
            onClick={btnHandler}
            >{btnName}
        </button>
    )
}

Button.propTypes = {
    classes: PropTypes.string,
    btnType: PropTypes.string,
    btnName: PropTypes.string,
    btnHandler: PropTypes.func,
};

export default Button;