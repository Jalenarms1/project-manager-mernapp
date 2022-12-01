import React, { useEffect, useState } from 'react'
import Auth from "../utils/auth";
import UserForm from '../components/Form';
import { Navigate } from 'react-router-dom';

export default function LandingPage() {
    
    if(Auth.loggedIn()){
        return <Navigate to={'/user'} />
    }


    return (
        <>
            <div className='front-page m-0 pt-2'>
                
                <div className='content-wrap d-flex align-items-center justify-content-between w-75 m-auto'>
                    <div className='wrap-image '>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/007/951/672/small/cityscape-on-white-background-building-perspective-modern-building-in-the-city-skyline-city-silhouette-city-skyscrapers-business-center-vector.jpg' alt="cover-img" />
                        <p className='text-light my-2'><em>Time is money. It's time for us to budget for you.</em></p>
                    </div>
                    <div className='wrap-form w-50 mx-5'>
                        <h3 className='text-light'>Let's get started...</h3>
                        <UserForm />
                    </div>
                </div>
            </div>
           
        </>
    )
}
