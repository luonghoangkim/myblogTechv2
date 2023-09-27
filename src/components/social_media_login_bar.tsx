// SocialMediaLoginBar.tsx
import React, { useState , useEffect } from 'react';
import Link from 'next/link';
import FormRegister from './app.formRegister';
import FormLogin from './app.formLogin';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const SocialMediaLoginBar = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userFullName, setUserFullName] = useState<string | null>(null);
    const [checkedLocalStorage, setCheckedLocalStorage] = useState(false);

    const handleLogout = () => {  
        setIsLoggedIn(false);  
        setUserFullName(null);  
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fullName = localStorage.getItem('fullName');
      
        if (token && fullName) {
            setIsLoggedIn(true);
            setUserFullName(fullName);
          }
          setCheckedLocalStorage(true);
      }, []);
      
    const handleRegisterSuccess = (fullName: string) => {
        setUserFullName(fullName);
        setIsLoggedIn(true);
        setShowRegister(false);
        setShowLogin(false);
    };

    const handleLoginSuccess = (fullName: string) => {
        setUserFullName(fullName);
        setIsLoggedIn(true);
        setShowRegister(false);
        setShowLogin(false);  
    };


    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowRegister(false);
        setShowLogin(false);
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
    
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
     

    return (
        <div className="flex items-center justify-end bg-black h-7 p-2 pr-10">
            {checkedLocalStorage && (isLoggedIn ? (
                <div className="text-white"> 
                    <ButtonGroup>
                        <DropdownButton as={ButtonGroup} variant="dark" title={`Xin chào: ${userFullName}`} id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Contact Us</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <Link href="#">
                        <span className="text-white no-underline"></span>
                    </Link>
                </div>
            ) : (
                <div className="ml-auto flex items-center space-x-2">
                    <button className=" text-white no-underline hover:bg-gray-700  " onClick={handleLoginClick}>
                        Đăng nhập
                    </button>
                    <button className="text-white no-underline pr-2 hover:bg-gray-700"  onClick={handleRegisterClick}>
                        Đăng ký
                    </button>
                    <Link href="#">
                        <span className="text-white no-underline hover:bg-gray-700">Contact Us</span>
                    </Link>
                </div>
                )
            )}
            <FormRegister show={showRegister}
                handleClose={handleClose}
                toggleForm={handleLoginClick}
                onRegisterSuccess={handleRegisterSuccess} />
            <FormLogin show={showLogin}
                handleClose={handleClose}
                toggleForm={handleRegisterClick}
                onLoginSuccess={handleLoginSuccess} />
        </div>

    );
};

export default SocialMediaLoginBar;


