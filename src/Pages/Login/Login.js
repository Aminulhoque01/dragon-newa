import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {login}= useContext(AuthContext);
    const navigate= useNavigate();

    const handlerLoginBtn=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        login(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
       
    }

    return (
        
        <Form onSubmit={handlerLoginBtn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
            
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    );
};

export default Login;
