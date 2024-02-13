import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {

    const handleWelcomeClick = () => {

    }

    return(
        <>
            <Link to="/profile" style={{ textDecorationColor: 'blue' }}>
                <h1 className="welcomePageSubTitle">
                    Welcome to my Portfolio
                </h1>
            </Link>
        </>
    );
};

export default Welcome;