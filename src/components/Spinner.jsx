import React, { useEffect, useState } from "react";

import './style/Spinner.css';

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // use !showSpinner here
    if (showSpinner){
        return <div className="loading-complete">Success !</div>;
    }

    return (
        <div className="spinner-container">
            <div className="spinner">
                
            </div>
        </div>
    );

};
export default Spinner;