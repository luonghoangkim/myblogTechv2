import {createSlice , PayloadAction} from "@reduxjs/toolkit"

type AuthState = { 
        name : string,
        email : string, 
        access_token : string,
}
const initialState = { 
        name : "",
        email : "", 
        access_token : '', 
} as AuthState

export const userSlide = createSlice({
    name: "user ",
    initialState, 
    reducers: {
        logOut: () => {
            return initialState;
        },
        updateUser: (state , action: PayloadAction<string>) => {
            const {name, email, access_token}: any = action.payload 
            state.name  = name || email
            state.email = email
            state.access_token = access_token
        }
    }
})

export const {updateUser, logOut} = userSlide.actions; 
export default userSlide.reducer;