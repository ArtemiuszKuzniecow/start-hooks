import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = window.localStorage.getItem("token")?.length > 0;

    const onLogin = () => {
        window.localStorage.setItem("token", "token");
        console.log(isAuth);
    };
    const onLogOut = () => {
        window.localStorage.removeItem("token");
        console.log(isAuth);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
