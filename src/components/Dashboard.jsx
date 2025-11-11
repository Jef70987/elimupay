import React from "react";
import "./style/Dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard = () =>{
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/Search');
    };
    return (
        <div className="dashboard--container">
            <div className="dashboard--header">
                <div className="logo--header">
                    <img src="/logo.jpg" alt="elimupay logo"/>
                    <h4>ElimuPay</h4>
                </div>
                
            </div>
            <div className="dashboard--main--content">
                <div className="dashboard--description">
                    <h3>Lipa Karo Na Mpesa</h3>
                    <p>Quick,Transparent,Secure with digital receipts</p>
                </div>
                <div className="institution--search">
                    <button className="search--button" onClick={handleClick}>Search school</button>
                </div>
                <div className="recent--payments">
                    <div className="receipts--view">
                        <h4>Recent Payments</h4>
                        <a href="#">View Receipts</a>
                    </div>
                    <div className="recents">
                        <div className="transaction--details">
                            <p>Bidii School</p>
                            <span><p>TXVA51GAF25</p></span>
                            <p>Ksh. 3000</p>
                        </div>
                        <div className="transaction--details">
                            <p>Bidii school</p>
                            <span><p>TXVA51GAF25</p></span>
                            <p>Ksh. 3000</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} SyNapTiK AnaLyTiKs</p>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;