import { Toast } from 'bootstrap';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { ToastHeader } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, updateUserProfile , verifyUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [accepted, setAccepted]=useState(false);
    
    const handleAccepted=(event)=>{
       setAccepted(event.target.checked);

    }


    const handlerRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        const url= form.photoURL.value;

        if (password.length < 6) {
            setError('you must should be 6 charter password');
        }
        if (password !== confirm) {
            alert('confirm password not match');
        }

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(user.name , user.photoURL );
                handelEmailVerification();
                toast.success('plz verify your email address')
            })
            .catch(error => {
                setError(error.message);
            })
        // console.log(email,password, confirm,);
    }

    
    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL,

        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error =>console.error(error))
    }

    const handelEmailVerification=()=>{
        verifyUser()
        .then(()=>{})
        .catch(error => console.error(error))
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
                <Form.Label>photoURL</Form.Label>
                <Form.Control type="photoURL" name='photoURL' placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
            </Form.Group>

            <Button  variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>

            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;