"use client"
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    email:'',
    name: ''
  });
  const [loading, setLoading] = useState(true);
 
  const getUserDetailsById = async (id:any, token:any) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/user/get-details/${id}`, {
        headers: {
          token: `Bearer ${token}`,
        },
      }); 
      return res.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const access_token = localStorage.getItem('access_token');
      const id = localStorage.getItem('user_id');
        
      if (id && access_token) {
        try {
          const userDetails = await getUserDetailsById(id, access_token);
          setUserData(userDetails.data);
          console.log("userDetails",userDetails.data)
        } catch (error) {
          console.error('Error fetching user details:', error);
        } finally {
          setLoading(false);
        }
      }
    };
  
    fetchData();
  }, []);

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
                <span>{userData.email}</span>
              </div>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Full Name:</label>
                <span>{userData.name}</span>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;

