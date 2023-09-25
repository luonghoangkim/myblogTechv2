import React, { useState } from 'react';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import submitLogin from '@/api/login_api';

interface FormLoginProps {
  show: boolean;
  handleClose: () => void;
  toggleForm: () => void;
  onLoginSuccess: (fullName : string) => void;
}

const FormLogin = ({ show, handleClose, toggleForm, onLoginSuccess }: FormLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',  
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(">>>>>>check data" ,userData)
    try {
      const res = await submitLogin(userData); 
      console.log(res.message); 
      console.log(res.data.fullName);      
    } catch (error) {
      console.error(error);
    }
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
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
                 value={userData.email}
                 onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="password" className="relative">
                <Form.Label>Mật khẩu:</Form.Label>
                <div className="relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
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
              <Button variant="dark" className="w-100 mt-4" type="submit">
                Đăng nhập
              </Button>
              <div className='mt-3 text-center'>
                <span>Chưa có tài khoản?</span>
                <button
                  className='text-primary'
                  onClick={() => toggleForm()}
                >
                  Đăng ký
                </button>
              </div>
            </Form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormLogin;
