import React from "react";
import './style/Processing.css';
import Spinner from "./Spinner";


const Processing = () =>{

    // const navigate = useNavigate();
    

   return(
     <div className="processing--container">
        <div className="processing--header">
            
            <div className="header--info">
                <h2>Processing...</h2>
            </div>
            
        </div>
        <div className="processing--main-content">
            <div className="confirm--process">
                <p>v</p>
                <p>School search</p>
            </div>
            <div className="confirm--process">
                <p>v</p>
                <p>Student verification</p>
            </div>
            <div className="confirm--process">
                <p>v</p>
                <p>Payment</p>
            </div>
            <div className="spinner--loading">
                <Spinner/>
            </div>
            
        </div>
    </div>
   );

};
export default Processing;