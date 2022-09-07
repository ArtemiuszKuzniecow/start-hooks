import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [func, setFunc] = useState(() => onLogin);
    const [content, setContent] = useState("Войти");
    useEffect(() => {
        console.log("clicked");
        if (isAuth) {
            setFunc(() => onLogOut);
            setContent("Выйти из системы");
        } else {
            setFunc(() => onLogin);
            setContent("Войти");
        }
    });
    return (
        <button className="btn btn-primary" onClick={func}>
            {content}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
