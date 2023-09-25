import React, { useState } from 'react';
import Link from 'next/link';
import FormRegister from './app.formRegister';
import FormLogin from './app.formLogin';

const SocialMediaLoginBar = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

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
            <FormRegister show={showRegister} handleClose={handleClose} toggleForm={handleLoginClick} />
            <FormLogin show={showLogin} handleClose={handleClose} toggleForm={handleRegisterClick} />
        </div>
    );
};

export default SocialMediaLoginBar;
