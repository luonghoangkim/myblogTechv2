import React, { useEffect, useState } from 'react';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Loading from './app.loading';
import jwt_decode from "jwt-decode"; 
import * as userService from '../service/userService'
import { useMutationHooks } from '@/hooks/userMutationHook'; 
import * as toast from './app.toast'
import {useDispatch} from 'react-redux'
import { updateUser } from '@/redux/slides/userSilde';
interface FormLoginProps {
  show: boolean;
  handleCloseForm: () => void;
  toggleForm: () => void;
}

type iDecode = {
  id : string,
  isAdmin ?: boolean
}

const FormLogin = ({ show, handleCloseForm, toggleForm }: FormLoginProps) => {
  const [showPassword, setShowPassword] = useState(false); 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const mutation = useMutationHooks(
     data => userService.loginUser(data)
  )
  
  const {data , isLoading, reset }= mutation

  useEffect(() => {
    if (data?.newReponse?.status === 'OK') {
      toast.success();
      reset();   
      handleCloseForm();   
      localStorage.setItem('access_token', data?.newReponse?.access_token)
      if(data?.newReponse?.access_token){
        const decode:iDecode = jwt_decode(data?.newReponse?.access_token)
        console.log("decode", decode)
        if(decode?.id){
          handleGetDetailsUser(decode?.id, data?.newReponse?.access_token)
        }
      }
    }
  }, [data?.newReponse?.status]); 

  const handleGetDetailsUser = async (id: string, token: string) => {
    // const storage = localStorage.getItem('refresh_token')
    // const refreshToken = JSON.parse(storage)
    const res = await userService.getDetailUser(id, token)
    console.log("res", res)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    mutation.mutate({
      email,
      password
    })  
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
              {data?.newReponse?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.newReponse?.message}</span>}
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
