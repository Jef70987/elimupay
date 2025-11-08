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
                    <h2>ElimuPay</h2>
                </div>
                <div className="help--header">
                    <h3>Help</h3>
                </div>
            </div>
            <div className="dashboard--main--content">
                <div className="dashboard--description">
                    <h2>Lipa Karo Na Mpesa</h2>
                    <p>Quick, Secure and Transparent with digital receipts</p>
                </div>
                <div className="institution--search">
                    <button className="search--button" onClick={handleClick}>Find school</button>
                </div>
                <div className="recent--payments">
                    <div className="receipts--view">
                        <h2>Recent Payments</h2>
                        <a href="#">View Receipts</a>
                    </div>
                   <table className="recent--table">
                    
                    <tbody>
                        <tr className="recent--header">
                            <td>Ref</td>
                            <td>school</td>
                            <td>Name</td>
                            <td>Amount (ksh)</td>
                            <td>Day/Time</td>
                        </tr>
                        
                        <tr>
                            <td>TXH35GSYG2</td>
                            <td>Bidii School</td>
                            <td>John Juma</td>
                            <td>4000</td>
                            <td>2025/11/01-T14:00:00</td>
                        </tr>
                        <tr>
                            <td>TXH35GSYG2</td>
                            <td>Bidii School</td>
                            <td>John Juma</td>
                            <td>4000</td>
                            <td>2025/11/01-T14:00:00</td>
                        </tr>
                        <tr>
                            <td>TXH35GSYG2</td>
                            <td>Bidii School</td>
                            <td>John Juma</td>
                            <td>4000</td>
                            <td>2025/11/01-T14:00:00</td>
                        </tr>
                        <tr>
                            <td>TXH35GSYG2</td>
                            <td>Bidii School</td>
                            <td>John Juma</td>
                            <td>4000</td>
                            <td>2025/11/01-T14:00:00</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;