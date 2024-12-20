import "./SignIn.css";
import React from "react";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";





const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();  

        const userData = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:8080/api/signin', userData);
            console.log('Réponse du back-end:', response.data);  
            if (response.data === "Connexion réussie") {
                setMessage('Connexion réussie');
                navigate("/download");
            } else {
                setMessage('You do not have the permission to access the application.');
            }
        } catch (error) {
            console.log('Erreur:', error);  
            setMessage('Connection failed');
        }
    };

    return (
        <Container className="container">
            <div className="wrapper">
                <form action="">
                    <h1>Sign In</h1>
                    <div className="input-box">
                        <input className="input-txt" type="text" placeholder="Username" required value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input className="input-txt" type="password" placeholder="Password" required value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <a href="#">Forgot Password ?</a>
                        </label>
                    </div>
                    <Button type="submit" onClick={handleSubmit}>Login</Button>
                </form>
                <p>{message}</p>

            </div>
        </Container>

    )
}

export default SignIn;