import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaFacebook} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20}  style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>Ntinda.</p>
                    </div>
                </div>
                <div className="Phone">
                    <h4>
                    <FaPhone  size={20}  style={{color: "#fff", marginRight: "2rem"}}/>
                        0789641283
                    </h4>
                </div>
                <div className="Email">
                    <h4>
                    <FaMailBulk  size={20}  style={{color: "#fff", marginRight: "2rem"}}/>
                        info@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This sis  h anhnavng vkrihrv jkahoihgalkavnjkvihian av efiolam vhfiwgn  oag hidajv vaghrugknv fionjvievnern </p>
                <div className="social">
                <FaFacebook  
                    size={20}  
                    style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter  
                    size={20}  
                    style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin  
                    size={20}  
                    style={{color: "#fff", marginRight: "1rem"}}/>
                     
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer