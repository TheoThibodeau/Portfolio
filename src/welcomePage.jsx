import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { useState, useEffect } from "react";

const Welcome = () => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-in') {
              setFadeProp({
                   fade: 'fade-out'
              })
           } else {
                setFadeProp({
                   fade: 'fade-in'
                })
           }
        }, 3000);
   return () => clearInterval(timeout)
   }, [fadeProp])

    return(
        <>        
        <h1 className={fadeProp.fade}><div className="newName">
            <svg viewBox="0 0 1160 300">
                <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="45%">Hello!</text>
                </symbol>
                <g className="g-ants">
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
            </svg>
        </div></h1>



        

            <Link to="/profile" style={{ textDecorationColor: 'blue' }}>
                <h1 className="welcomePageSubTitle">
                    Welcome to my Portfolio
                </h1>
            </Link>
        </>
    );
};

export default Welcome;