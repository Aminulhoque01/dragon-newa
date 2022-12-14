import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const RightSideNave = () => {
    const {googleProviderLogin}= useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handlerLogin=()=>{
        
        googleProviderLogin(googleProvider)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (

        <div>
            <ButtonGroup vertical>
                <Button onClick={handlerLogin} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with gitHub</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h2>Find on us</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>

    );
};

export default RightSideNave;