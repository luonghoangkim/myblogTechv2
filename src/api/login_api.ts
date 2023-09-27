import API_BASE_URL from "./apiConfig";

const submitLogin = async (userData: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.data.token);
        return data;
      } else {
        throw new Error('Đăng nhập thất bại');
      }
    } catch (error) {
      console.error(error);
      throw error;  
    } 
  };
  
  export default submitLogin;
  