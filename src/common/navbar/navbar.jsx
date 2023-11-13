import React from 'react'
import './navbar.css'
import { LinkButton } from '../LinkButton/LinkButton'
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../pages/userSlice";

export const Navbar = () => {
    const dispatch = useDispatch();

    const rdxCredentials = useSelector(userData);
  
    const logOutMe = () => {
  
      dispatch(logout( {credentials : ""}))
  
      navigate("/")
      
    }

     return (
         <div className='navbarDesign'>
            <div className='navbarPages'>
            <LinkButton
                path={"/"}
                title={"HOME"}
            />
            <LinkButton
                path={"/gallery"}
                title={"GALLERY"}
            />
            <LinkButton
                path={"/information"}
                title={"INFORMATION"}
            />
            <LinkButton
                path={"/appointments"}
                title={"APPOINTMENTS"}
            />
            </div>
            <div className='navbarProfile'>
            <LinkButton
                path={"/login"}
                title={"SIGN IN"}
            />
            <LinkButton
                path={"/register"}
                title={"SIGN UP"}
            />
            </div>
         </div>
     )
}
