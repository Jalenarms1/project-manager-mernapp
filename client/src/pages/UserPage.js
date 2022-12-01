import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestForm from '../components/TestForm';
import { UserProvider, useUserContext } from '../context/userContext';
import Auth from "../utils/auth";
import Dashboard from '../components/Dashboard';


export default function UserPage() {
  console.log("page reached")
  
  const {userData} = useUserContext();
  console.log(userData)


 


  return (
    <>
      <Dashboard />

    </>
  )
}
