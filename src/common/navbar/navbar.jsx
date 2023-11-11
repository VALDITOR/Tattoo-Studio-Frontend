import React from 'react'
import './navbar.css'
import { LinkButton } from '../LinkButton/LinkButton'

export const Navbar = () => {


     return (
         <div className='navbarDesign'>
            <div className='logo'></div>
            <LinkButton
                path={"/"}
                title={"Home"}
            />
            <LinkButton
                path={"/gallery"}
                title={"Gallery"}
            />
            <LinkButton
                path={"/login"}
                title={"Login"}
            />
            <LinkButton
                path={"/register"}
                title={"Register"}
            />
         </div>
     )
}