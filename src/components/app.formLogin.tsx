import React, { useState } from 'react';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from './app.loading';
import jwt_decode from "jwt-decode"; 

interface FormLoginProps {
  show: boolean;
  handleCloseForm: () => void;
  toggleForm: () => void; 
}

interface DecodedToken {
  id: string;
  isAdmin: boolean;
}

const FormLogin = ({ show, handleCloseForm, toggleForm}: FormLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault();
    try { 
      const res = await axios.post(`http://localhost:3001/api/user/sign-in`, { email: email, password: password });
      if (res.data.newReponse.status === 'ERR') {
        toast.error('Email hoặc mật khẩu sai')
      } else {
        toast.success('Đăng nhập thành công')
        setEmail('');
        setPassword('');
        handleCloseForm()
      }
      localStorage.setItem('access_token', JSON.stringify(res.data.newReponse?.access_token))
      const decoded : DecodedToken = jwt_decode(res.data.newReponse?.access_token); 
      if (decoded?.id) {
        const userId = decoded?.id;
        localStorage.setItem('user_id', userId);
      }
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false)
    }
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleCloseForm} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Đăng nhập</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <Form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password" className="relative">
                <Form.Label>Mật khẩu:</Form.Label>
                <div className="relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    variant="link"
                    className="position-absolute end-0 top-50 translate-middle-y"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      className="text-secondary"
                    />
                  </Button>
                </div>
              </Form.Group>
              <Loading isLoading={isLoading}>
                <Button
                  disabled={!email || !password}
                  variant="dark" className="w-100 mt-4" type="submit">

                  Đăng nhập
                </Button>
              </Loading>
            </Form>
            <div className='mt-3 text-center'>
              <span>Chưa có tài khoản? </span>
              <button
                className='text-primary'
                onClick={() => toggleForm()}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormLogin;
