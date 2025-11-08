import React from "react";
import './style/Payment.css';
import { useNavigate } from "react-router-dom";

const Payment =()=>{
    const navigate = useNavigate();

    const handleBack =()=>{
        navigate('/Verify');
    };
    return(
        <div className="payment--main-container">
            <div className="payment--header">
                <div className="Nav--Back">
                    <a href="#" onClick={handleBack}>Back</a>
                </div>
                <div className="header--info">
                    <h2>Pay Fees</h2>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="payment--main-content">

            </div>
        </div>
    );
};
export default Payment;