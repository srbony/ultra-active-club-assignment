import React from 'react';
import logo from "../../images/heder.logo.jpg";
import './Heder.css'




const Heder = () => {
    return (
        <div>
            <div className='logo-container'>
               
                <img src={logo} alt="" />
                <h3 className='title'>Extreme Activities Club</h3>


            </div>

        </div>
    );
};

export default Heder;