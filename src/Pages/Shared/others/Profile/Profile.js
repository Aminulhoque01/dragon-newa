import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';


const Profile = () => {
    const {user}= useContext(AuthContext);

    const [name,setName]=useState(user.displayName);
    const PhotoURLRef= useState(user.photoURL);

    const handlerSubmit =event=>{
        event.preventDefault();
        console.log(PhotoURLRef.current.value);
    }

    const handlNameChange =(event)=>{
        setName(event.target.value);
    }

    return (
        <div>
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>your name</Form.Label>
                    <Form.Control onChange={handlNameChange} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>your PhotoURL</Form.Label>
                    <Form.Control ref={PhotoURLRef} type="text" placeholder="url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;