import React, { useState } from "react";
import './style/Payment.css';
import { useNavigate } from "react-router-dom";

const Payment =()=>{
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleClick =()=>{
        if (value < 50){
            setError('Min Amount is Ksh 50');
        } else{
            navigate('/processing');
        };
        
    };
    const handleBack =()=>{
        navigate('/Verify');
    };
    
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const numValue = parseInt(inputValue);

        if (!isNaN(numValue) && (numValue >= 50)){
            setValue(inputValue);
            
        } else{
            setValue(inputValue);
            
        }
    };
    return(
        <div className="payment--main-container">
            <div className="payment--header">
                <div className="Nav--Back">
                    <a href="#" onClick={handleBack}>Back</a>
                </div>
                <div className="header--info">
                    <h2>Payment</h2>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="payment--main-content">
                <u><p className="payment--barrier">Student verified</p></u>
                <div className="student--details">
                    <p>Mary Wanjiku - Grade 3</p>
                    <p>Admission Number - Moi/2025/089</p>
                    <p>Bidii Primary School</p>
                </div>
                <div className="payment--details">
                    <p className="current--balance">
                        KES 4500
                    </p>
                    <div className="payment--status">
                        <p>current balance</p>
                        <p>KES 4500</p>
                    </div>
                    <div className="payment--status">
                        <p>Last Payment</p>
                        <p>KES 3000</p>
                    </div>
                    <div className="payment--status">
                        <p>Date</p>
                        <p>30 OCT 2025</p>
                    </div>
                </div>
                <div className="payment--input">
                    <input
                    required
                    type="number"
                    placeholder="Enter Amount (min : 50)"
                    value={value}
                    onChange={handleChange}
                    style={{ border: error ? '2px solid red' : '1px solid #128C7E'}}
                    />
                    {error && <p style={{ color: 'red', fontSize: '14px'}}>{error}</p>}
                </div>
                <div >
                    <button className="payment--button" onClick={handleClick}>confirm payment</button>
                </div>
            </div>
        </div>
    );
};
export default Payment;