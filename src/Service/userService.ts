import axios from "axios";
import jwt_decode from "jwt-decode";

export interface DecodedToken {
  id: string;
  isAdmin: boolean;
}

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`http://localhost:3001/api/user/sign-in`, {
      email: email,
      password: password
    });

    const token = res.data.newReponse?.access_token;
    const decoded: DecodedToken = jwt_decode(token);

    if (decoded?.id) {
      const userId = decoded?.id;
      localStorage.setItem('user_id', userId);
    }

    localStorage.setItem('access_token', JSON.stringify(token));

    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: "Email hoặc mật khẩu sai" };
  }
};


export const signUp = async (email: string, password: string, confirmPassword: string) => {
  try {
    const response = await axios.post(`http://localhost:3001/api/user/sign-up`, {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });

    if (response.data.status === 'ERR') {
      return { success: false, error: 'Email đã tồn tại' };
    } else if (response.data.status === 'ERR3') {
      return { success: false, error: 'Xác nhận mật khẩu không chính xác' };
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'Đã có lỗi xảy ra' };
  }
};