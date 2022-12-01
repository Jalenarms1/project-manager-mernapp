import React from 'react'
import Auth from "../utils/auth";
import { Avatar } from '@mui/material';
import FolderIcon from "@mui/icons-material/Folder";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail"
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import ClearIcon from "@mui/icons-material/Clear";

export default function Navbar() {

  console.log(Auth.loggedIn())

  return (
    <>
      {!Auth.loggedIn() && <div className='wrap-header d-flex justify-content-between w-100'>
          <Link to={"/"} className='d-flex px-2 m-3 link-bg text-decoration-none'>
            <h1>Rise</h1>
          </Link>
          <div className='wrap-options'>
              <Link to={'/login'} className='text-decoration-none'><p className='text-light px-4 text-decoration-none fs-5'>Login</p></Link>
          </div>


      </div>}
      {Auth.loggedIn() && <Nav className='w-100 nav-bg p-2 justify-content-between align-items-center'>
          <Link to={"/"} className='d-flex px-3 link-bg text-decoration-none rise-text'>
            <h1>Rise</h1>
          </Link>
          <div className='d-flex'>
            <div className='wrap-icon'>
              <Badge badgeContent={3} color={"primary"} className='mx-2'>
                <MailIcon color="success" fontSize='large' />
              </Badge>

            </div>
            <div className='wrap-icon'>
              <Avatar className='mx-2'>
                <FolderIcon />
              </Avatar>
            </div>
            <div className='wrap-icon'>
              <Avatar className='mx-2'>
              </Avatar>
            </div>
            <div className='align-self-center'>
              <ClearIcon fontSize='large' style={{color: "#e34949", cursor: 'pointer'}} className="mx-2" onClick={() => Auth.logout()} />

            </div>

          </div>
        </Nav>}
        
    </>
  )
}
