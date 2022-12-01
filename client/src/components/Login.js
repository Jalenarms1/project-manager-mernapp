import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CHECK_USER } from '../utils/mutations'
import Auth from '../utils/auth';
import { SketchPicker } from 'react-color';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    const [login, { err, data }] = useMutation(CHECK_USER);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formData}
            })

            Auth.login(data.login.token)

            return data

        } catch (error) {
            console.log(error);
            console.log(err);
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    

  return (
    <>
        <Form onSubmit={formSubmit}>
            <Form.Group>
            <Form.Label className='text-light my-2'>
                    Email: 
                </Form.Label>

                <Form.Control value={formData.email} onChange={handleInputChange} name="email" type='email'></Form.Control>

                <Form.Label className='text-light my-2'>
                    Password:
                </Form.Label>

                <Form.Control value={formData.password} onChange={handleInputChange} name="password" type='password'></Form.Control>
            </Form.Group>

            <Button className='w-25 my-4' type="submit">Login</Button>
        </Form>
    </>
  )
}
