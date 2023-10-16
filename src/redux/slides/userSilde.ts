// Import các dependency cần thiết từ Redux Toolkit
import { AuthState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Khởi tạo giá trị ban đầu của state
const initialState = {
  name: "",
  email: "",
  access_token: '',
} as AuthState;

// Tạo một slice mới có tên "userSlide"
export const userSlide = createSlice({
  name: "user ", // Đặt tên cho slice
  initialState, // Sử dụng giá trị ban đầu
  reducers: { 
    logOut: () => initialState,
    // Reducer xử lý khi cập nhật thông tin người dùng
    updateUser: (state, action: PayloadAction<string>) => {
      const { name, email, access_token }: any = action.payload; // Lấy thông tin từ payload

      // Gán thông tin mới vào state
      state.name = name || email; // Sử dụng name hoặc email
      state.email = email;
      state.access_token = access_token;
    }
  }
});

// Export các action đã tạo từ slice
export const { updateUser, logOut } = userSlide.actions;

// Export reducer của slice
export default userSlide.reducer;
