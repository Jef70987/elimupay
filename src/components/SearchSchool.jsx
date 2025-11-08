import React from "react";
import "./style/SearchSchool.css";
import { useNavigate } from "react-router-dom";
const SearchSchool = () =>{
    const navigate = useNavigate();

    const handleBack =()=>{
        navigate('/Dashboard');
    };
    const handleClick =()=>{
        navigate('/Verify');
    };
    return(
        <div className="search--main-container">
            <div className="search--header">
                <div className="Nav--Back">
                    <a href="#" onClick={handleBack}>Back</a>
                </div>
                <div className="header--info">
                    <h2>Select School</h2>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="search--main-content">
                <div className="input--search">
                    <p>Select from list or type to search by name.</p>
                     <div className="type--select">
                        <select className="select--input">
                            <option>--Select school from list--</option>
                            <option>Bidii school</option>
                            <option>Jawabu school</option>
                            <option>Elimu school</option>
                            <option>Prestigius school</option>
                            <option>Goodwill school</option>
                        </select>
                    </div>
                    <div className="type--search">
                        <div className="search--input">
                            <input type="text" placeholder="search by name..."/>
                        </div>
                        <div >
                            <button className="search--button" onClick={handleClick}>Verify school</button>
                        </div>
                    </div>
                   
                </div>
                <div className="most--popular-schools">
                    <h2>Popular searches</h2>
                    <a href="#">
                        <div className="school">
                            <h3>Bidii school</h3>
                            <p>Nairobi</p>
                        </div>
                    </a>
                   <a href="#">
                     <div className="school">
                        <h3>jawabu school</h3>
                            <p>Kakamega</p>
                        </div>
                   </a>
                </div>
            </div>
        </div>
    );
};
export default SearchSchool;