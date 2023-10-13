import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import jwt_decode from "jwt-decode";

export interface DecodedToken {
  id: string;
  isAdmin: boolean;
}

export const loginUser = async (data: any) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
  return res.data
}

export const signUpUser = async (data: any) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
  return res.data
}

export const getDetailUser = async (id: string, access_token: string) => {
  const res = await axios.get(`http://localhost:3001/api/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
  }
  });
  return res.data
}

 
 