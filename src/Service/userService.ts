import axios from "axios"; 
export const axiosJWT = axios.create()

export const loginUser = async (data: any) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
  return res.data
}

export const signUpUser = async (data: any) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
  return res.data
}

export const getDetailUser = async (id: string, access_token: string) => {
  const res = await axiosJWT.get(`http://localhost:3001/api/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
  }
  });
  return res.data
}
 
export const refreshToken = async (refreshToken: any) => {
  console.log('refreshToken', refreshToken)
  const res = await axios.post(`http://localhost:3001/user/refresh-token`, {} , {
      headers: {
          token: `Bearer ${refreshToken}`,
      }
  })
  return res.data
}