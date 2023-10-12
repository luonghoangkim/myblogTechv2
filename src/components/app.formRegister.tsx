"use client"
import React, { useState } from 'react';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loading from './app.loading';


interface FormRegisterProps {
  show: boolean;
  handleCloseForm: () => void;
  toggleForm: () => void;
}

const FormRegister = ({ show, handleCloseForm, toggleForm }: FormRegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    console.log(">>>>>>check data", email, password, confirmPassword)
    try {
      const response = await axios.post(`http://localhost:3001/api/user/sign-up`, { email: email, password: password, confirmPassword: confirmPassword });
      console.log('Register in:', response.data);
      if (response.data.status === 'ERR') {
        toast.error('Email đã tồn tại')
      } else if (response.data.status === 'ERR3') {
        toast.error('Xác nhận mật khẩu không chính xác')
      } else {
        toast.success('Đăng ký thành công vui lòng đăng nhập để tiếp tục')
        toggleForm();
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
          <Offcanvas.Title> Đăng Ký Tài Khoản</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="w-100 max-w-md bg-white p-4 rounded shadow">
            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Mật khẩu:</Form.Label>
                <div className="position-relative">
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
              <Form.Group controlId="confirmPassword">
                <Form.Label>Xác nhận mật khẩu:</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Xác nhận mật khẩu"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button
                    variant="link"
                    className="position-absolute end-0 top-50 translate-middle-y"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                      className="text-secondary"
                    />
                  </Button>
                </div>
              </Form.Group>
              <Loading isLoading={isLoading}>
              <Button
                disabled={!email || !password || !confirmPassword}
                variant="dark"
                type="submit"
                className="w-100 mt-2"
              >
                Đăng ký
              </Button>
              </Loading>
            </Form>
            <div className="mt-3 text-center">
              <span>Đã có tài khoản? </span>
              <button
                className="text-primary"
                onClick={() => toggleForm()}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormRegister;
