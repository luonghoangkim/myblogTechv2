import React, { useState } from 'react';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface FormRegisterProps {
  show: boolean;
  handleClose: () => void; 
  toggleForm: () => void;
}

const FormRegister = ({ show, handleClose, toggleForm} : FormRegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý việc submit form tại đây
  };

  return (
    <>
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Đăng Ký Tài Khoản</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="w-100 max-w-md bg-white p-4 rounded shadow"> 
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Mật khẩu:</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu"
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
            <Form.Group controlId="name">
              <Form.Label>Tên:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên của bạn"
              />
            </Form.Group> 
            <Button
              variant="dark"
              type="submit"
              className="w-100 mt-2"
            >
              Đăng ký
            </Button>
          </Form>
          <div className='mt-3 text-center'>
              <span>Đã có tài khoản?</span>
              <button
                className='text-primary'
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
