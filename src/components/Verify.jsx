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
                    <h4>Verify Student</h4>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="verify--main-content">
                <div className="verify--description">
                    <div className="verified">
                        <h5>School :</h5>
                        <p>Bidii primary xxxx xxxxx school</p>
                    </div>
                    <div className="verified">
                        <h5>Account No :</h5>
                        <p>12345678</p>
                    </div>
                    <div className="verified">
                        <h5>Location:</h5>
                        <p>Kakamega</p>
                    </div>
                </div>
                <div className="verify--admission">
                    <h4>Enter Admission Number</h4>
                    <p>We'll fetch student details automatically</p>
                    <div className="verification">
                        <div className="admission--input">
                            <input type="" placeholder="Enter admission number..."/>
                        </div>
                        {/* student auto-verification details to appear here */}
                        {/* <div className="student--details">

                        </div> */}
                        <div >
                            <button onClick={handleClick} className="verify--button">Verify Student</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Verify;