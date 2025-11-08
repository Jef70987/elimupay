import React, { useState } from "react";
import "./style/SearchSchool.css";
import { useNavigate } from "react-router-dom";
const SearchSchool = () =>{
    const navigate = useNavigate();

    const handleBack =()=>{
        navigate('/Dashboard');
    };
    
    const [inputValue, setinputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [Info, setInfo] = useState('Select from list or type to search by name.');
    const options = [
        'Bidii school','Jawabu school','Elimu School'
    ];

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleClick =()=>{
        if (inputValue != ''){
            navigate('/Verify');
        }
        setInfo('Error! PLease type or select school !!!');
        
    };

    const handleSelect = (value) => {
        setinputValue(value);
        setShowOptions(false);
        handleClick
    }

    return(
        <div className="search--main-container">
            <div className="search--header">
                <div className="Nav--Back">
                    <a href="#" onClick={handleBack}>Back</a>
                </div>
                <div className="header--info">
                    <h4>Select School</h4>
                </div>
                <div className="help--header">
                    <a>Help</a>
                </div>
            </div>
            <div className="search--main-content">
                <div className="input--search">
                    <p className="status--info">{Info}</p>
                     <input
                     type="text"
                     value={inputValue}
                     onChange={(e) => setinputValue(e.target.value)}
                     onFocus={() => setShowOptions(true)}
                     onBlur={() => setTimeout(() => setShowOptions(false), 200)}
                     placeholder="Type or select..."
                     />
                    {showOptions && filteredOptions.length > 0 && (
                        <div className="list--options">
                            {filteredOptions.map((option, index) => (
                                <div 
                                key={index}
                                onClick={() => handleSelect(option)}
                                style={{
                                    padding: '8px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #eee'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroud = '#f0f0f0'}
                                onMouseLeave={(e) => e.target.style.backgroud = 'white'}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="verify--button" onClick={handleClick}>Verify school</button>
                </div>
                <div className="most--popular-schools">
                    <h4>Popular searches</h4>
                    <a href="#">
                        <div className="school">
                            <h5>Bidii school</h5>
                            <p>Nairobi</p>
                        </div>
                    </a>
                   <a href="#">
                     <div className="school">
                        <h5>jawabu school</h5>
                            <p>Kakamega</p>
                        </div>
                   </a>
                </div>
            </div>
        </div>
    );
};
export default SearchSchool;