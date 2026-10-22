import React, { useState } from 'react';
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = ({onClose}) => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goHome = () => {
        window.location.href = '/';
    }

    const register = async (e) => {
        e.preventDefault();

        let url = window.location.origin + "/djangoapp/register";
        
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
            }),
        });

        const json = await res.json();
        if (json.status) {
            sessionStorage.setItem('username', json.userName);
            window.location.href = window.location.origin + '/';
        } else if (json.error === "Already Registered") {
            alert("The user with same username is already registered");
            window.location.href = window.location.origin + '/';
        }
    };

    return (
      <div className="register_container" style={{width: "50%"}}>
        <div className="header" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <span className="text" style={{flexGrow: "1"}}>Sign-up</span>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                <a href="/" onClick={() => {goHome()}} style={{justifyContent: "space-between"}}>
                    <img style={{width: "1cm"}} src={close_icon} alt="X"/>
                </a>
            </div>
        </div>
        <hr/>
        <form onSubmit={register}>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} className="img_icon" alt='Username'/>
                    <input type="text" placeholder="Username" name="username" className="input_field" onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                <div className="input">
                    <img src={user_icon} className="img_icon" alt='First Name'/>
                    <input type="text" placeholder="First Name" name="first_name" className="input_field" onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className="input">
                    <img src={user_icon} className="img_icon" alt='Last Name'/>
                    <input type="text" placeholder="Last Name" name="last_name" className="input_field" onChange={(e) => setLastName(e.target.value)} required/>
                </div>
                <div className="input">
                    <img src={email_icon} className="img_icon" alt='Email'/>
                    <input type="email" placeholder="Email" name="email" className="input_field" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input">
                    <img src={password_icon} className="img_icon" alt='Password'/>
                    <input type="password" placeholder="Password" name="psw" className="input_field" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
            </div>
            <div className="submit_panel">
                <input className="submit" type="submit" value="Register"/>
            </div>
        </form>
      </div>
    );
};

export default Register;
