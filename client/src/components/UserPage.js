import React from 'react'
import { useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";


export default function UserPage() {
  console.log("page reached")
  const navigate = useNavigate();

  if(!Auth.loggedIn()){
    navigate("/")
  } ;


  return (
    <div>UserPage</div>
  )
}
