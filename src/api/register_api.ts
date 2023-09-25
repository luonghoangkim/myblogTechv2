import API_BASE_URL from "./apiConfig";

// api.ts
const submitRegistration = async (userData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data;
    } else {
      throw new Error('Đăng ký thất bại');
    }
  } catch (error) {
    console.error(error);
    throw error;  
  } 
};

export default submitRegistration;
