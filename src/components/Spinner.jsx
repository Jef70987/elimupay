import React, { useEffect, useState } from "react";

import './style/Spinner.css';
import PinInput from "./Auth/Verification";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false);
            // redirect to pin input after 5seconds
            setTimeout(() => {
               navigate('/verification'); 
            },500);
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    // use !showSpinner here
    if (!showSpinner){
        return <div className="loading-complete">
           
        </div>;
    }

    return (
        <div className="spinner-container">
            <div className="spinner">
                
            </div>
            <p>please wait...</p>
        </div>
    );

};
export default Spinner;