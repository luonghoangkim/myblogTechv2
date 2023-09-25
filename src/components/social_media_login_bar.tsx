// SocialMediaLoginBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import FormRegister from './app.formRegister';
import FormLogin from './app.formLogin';  

const SocialMediaLoginBar = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userFullName, setUserFullName] = useState<string | null>(null);

    
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

    return (
        <div className="flex items-center justify-end bg-black h-7 p-2 pr-10">
        {isLoggedIn ? (
          <div className="text-white">
            Xin chào: {userFullName}
          </div>
        ) : (
          <div className="ml-auto flex items-center space-x-2">
            <button className="text-white no-underline" onClick={handleLoginClick}>
              Đăng nhập
            </button>
            <button className="text-white no-underline pr-2" onClick={handleRegisterClick}>
              Đăng ký
            </button> 
            <Link href="#">
              <span className="text-white no-underline">Contact Us</span>
            </Link>
          </div>
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

 
