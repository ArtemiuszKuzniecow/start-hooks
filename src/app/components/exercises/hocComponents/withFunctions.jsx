import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = window.localStorage.getItem("token")?.length > 0;

    const handleLogin = () => {
        window.localStorage.setItem("token", "token");
    };
    const handleLogOut = () => {
        window.localStorage.removeItem("token");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={() => handleLogin()}
                onLogOut={() => handleLogOut()}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
