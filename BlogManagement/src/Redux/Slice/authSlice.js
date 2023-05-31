import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
        removeUserData: (state, action) => {
            state.userData = null;
            localStorage.removeItem('userData');
        }
    }
})

export default authSlice.reducer;
export const { setUserData, removeUserData } = authSlice.actions;