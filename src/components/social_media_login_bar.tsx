import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import FormRegister from './app.formRegister';
import FormLogin from './app.formLogin';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import { isJsonString } from '@/app/untils';
import { logOut, updateUser } from '@/redux/slides/userSilde';
import { iDecode } from '@/types/types';
import * as userService from '../service/userService'
import useUserDetails from '@/hooks/useUserDetail';


const SocialMediaLoginBar = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const user = useSelector((state: any) => state.user)
    console.log("user", user)
    const dispatch = useDispatch();
    
    useUserDetails();

    const handleLogOutClick = () => {
        dispatch(logOut()); // Dispatch action đăng xuất
        localStorage.removeItem('access_token');
      };
      
    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleCloseForm = () => {
        setShowRegister(false);
        setShowLogin(false);
    };

    return (
        <div className="flex items-center justify-end bg-black h-7 p-2 pr-10">
            <div className="text-white"> 
                {user?.name ? (
                    <div>
                        <ButtonGroup>
                            <DropdownButton as={ButtonGroup} variant="dark" title={`Xin chào: ${user?.name}`} id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" href='/profile' >Profile</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={handleLogOutClick}>Đăng xuất</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Contact Us</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                        <Link href="#">
                            <span className="text-white no-underline hover:bg-gray-700">  Contact Us</span>
                        </Link>
                    </div>
                ) : (
                    <div className="ml-auto flex items-center space-x-2">
                        <button className=" text-white no-underline hover:bg-gray-700  " onClick={handleLoginClick}>
                            Đăng nhập
                        </button>
                        <button className="text-white no-underline pr-2 hover:bg-gray-700" onClick={handleRegisterClick}>
                            Đăng ký
                        </button>
                        <Link href="#">
                            <span className="text-white no-underline hover:bg-gray-700">Contact Us</span>
                        </Link>
                    </div>
                )} 
            </div>
            <FormRegister show={showRegister}
                handleCloseForm={handleCloseForm}
                toggleForm={handleLoginClick} />
            <FormLogin show={showLogin}
                handleCloseForm={handleCloseForm}
                toggleForm={handleRegisterClick} />
        </div>
    )
}
export default SocialMediaLoginBar;
