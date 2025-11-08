import React from "react";
import "./style/Verify.css";
import { useNavigate } from "react-router-dom";

const Verify = () =>{
    const navigate = useNavigate();

    const handleBack =()=>{
        navigate('/Search');
    };
    const handleClick =()=>{
        navigate('/Payment');
    };


    return(
        <div className="verify--main-container">
            <div className="verify--header">
                <div className="Nav--Back">
                    <a href="#" onClick={handleBack}>Back</a>
                </div>
                <div className="header--info">
                    <h2>Verify Student</h2>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="verify--main-content">
                <div className="verify--description">
                    <div className="verified">
                        <h3>School :</h3>
                        <p>Moi primary school</p>
                    </div>
                    <div className="verified">
                        <h3>Account No :</h3>
                        <p>12345678</p>
                    </div>
                </div>
                <div className="verify--admission">
                    <h2>Enter Admissiom Number</h2>
                    <p>We'll fetch student details automatically</p>
                    <div className="verification">
                        <div className="admission--input">
                            <input type="" placeholder="Enter admission number..."/>
                        </div>
                        {/* student auto-verification details to appear here */}
                        {/* <div className="student--details">

                        </div> */}
                        <div className="verify--button">
                            <button onClick={handleClick}>Verify Student</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Verify;