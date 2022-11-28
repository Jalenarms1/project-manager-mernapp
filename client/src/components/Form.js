import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";

export default function UserForm() {
    const [userData, setUserData] = useState({username: '', email: '', password: ''});

    const { newUser } = useUserContext();

    const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitNewUserData = async (e) => {
        e.preventDefault();
        try {
            const { data } = await newUser({
                variables: {...userData}
            })

            console.log(data);

            Auth.login(data.newUser.token);

            if(data){
                navigate("/user")
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
   <>
        
        <Form className='w-100' onSubmit={submitNewUserData}>
            <Form.Group>
                <Form.Label className='text-light my-2'>
                    Username: 
                </Form.Label>

                <Form.Control value={userData.username} onChange={handleInputChange} name="username" type='text'></Form.Control>

                <Form.Label className='text-light my-2'>
                    Email: 
                </Form.Label>

                <Form.Control value={userData.email} onChange={handleInputChange} name="email" type='email'></Form.Control>

                <Form.Label className='text-light my-2'>
                    Password:
                </Form.Label>

                <Form.Control value={userData.password} onChange={handleInputChange} name="password" type='password'></Form.Control>
            </Form.Group>
            <Button type="submit" className='w-100 mt-3'>Submit</Button>
        </Form>
       
   </>
  )
}
