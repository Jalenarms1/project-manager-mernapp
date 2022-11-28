import React from 'react'
import Auth from "../utils/auth";

export default function Navbar() {
  return (
    <>
        <div className='wrap-header d-flex justify-content-between w-100'>
            <h3 className='mx-4 my-2 p-2 fs-1'>RISE</h3>
            <div className='wrap-options'>
                <a href='/login' className='text-muted px-4 text-decoration-none fs-5'>Login</a>
                {Auth.loggedIn() && <button onClick={() => Auth.logout()} className='text-muted px-4 fs-5 bg-transparent border-0'>Logout</button>}
            </div>

        </div>
    </>
  )
}
