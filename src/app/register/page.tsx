"use client"
import React, { useState } from 'react'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import AppHeader from '@/components/app.header';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div> 
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-5">Đăng ký tài khoản</h2>
          <form>
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email:
              </label>
              <input
                placeholder="Nhập email"
                type="email"
                id="email"
                name="email"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-2 relative">
              <label htmlFor="password" className="block mb-2 font-medium">
                Mật khẩu:
              </label>
              <div className="relative">
                <input
                  placeholder="Nhập mật khẩu"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="text-gray-400"
                  />
                </button>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="name" className="block mb-2 font-medium">
                Tên:
              </label>
              <input
                placeholder="Nhập tên của bạn"
                type="text"
                id="name"
                name="name"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Số điện thoại:
              </label>
              <input
                placeholder="Nhập số điện thoại"
                type="text"
                id="phone"
                name="phone"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-600"
            >
              Đăng ký
            </button>
            <div className='mt-2'>
                <span>Đã có tài khoản?</span>
                <Link href={'/loggin'}><span className='text-blue-500 hover:text-blue-900'> Đăng nhập </span></Link>
            </div>
             <Link href={'/'}> <span className='text-blue-500 hover:text-blue-900' > Trở về trang chủ </span> </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
