import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { NEW_USER } from '../utils/mutations'
import Auth from '../utils/auth';
import { SketchPicker } from 'react-color';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Login() {
    const [newUser, { err, data }] = useMutation(NEW_USER);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await newUser({
                variables: { ...formData}
            })
            Auth.login(data.newUser.token)

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
        <div className='screen' style={{height: "100vh"}}>
           
        </div>
    </>
  )
}
