import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')) : null,
        currentuser: localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).name : null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(state.userData));
            state.currentuser = state.userData.name;
        },

        removeUserData: (state) => {
            state.userData = null;
            state.currentuser = null;
            localStorage.removeItem('userData');
        }
    }
})

export default authSlice.reducer;
export const { setUserData, removeUserData,currentUser } = authSlice.actions;