import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Register = () => {
    const {register}=useContext(AuthContext);

    const handlerRegister =(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const confirm= form.confirm.value;
        const password= form.password.value;

        if(password.length <6){
            alert('you must should be 6 charter password');
        }
        if(password !== confirm){
            alert('confirm password not match');
        }

        register(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
        // console.log(email,password, confirm,);
    }
    return (
        
            <Form onSubmit={handlerRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Password" />
              </Form.Group>
             
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
};

export default Register;