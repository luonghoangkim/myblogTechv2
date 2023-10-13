"use client"
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJwtToken()
  },[])

  const getJwtToken = async () => {
    const res =  await localStorage.getItem('jwt')
    console.log(res)
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <div className='flex justify-between items-center'>
            <h1>Thông tin cá nhân</h1>
            <span className="text-blue-500 cursor-pointer">Chỉnh sửa</span>
          </div>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Email:</label>
                <span>email</span>
              </div>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Full Name:</label>
                <span>Name</span>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;

