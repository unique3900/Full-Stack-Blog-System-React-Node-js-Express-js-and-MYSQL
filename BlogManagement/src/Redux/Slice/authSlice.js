import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "dotenv";




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
        userToken: localStorage.getItem('access_token')? JSON.parse(localStorage.getItem('access_token')) : null,
        headerToken: {
            status:false
        },
        currentuser: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : null,
        currentUserId:localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).id : null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(state.userData));
            state.currentuser = state.userData.name;
            state.currentUserId = state.userData.id;
            state.headerToken.status = true;
        },
        setuserAccess: (state, action) => {
            state.userToken = action.payload;
            localStorage.setItem('access_token', JSON.stringify(state.userToken));
            state.headerToken.status = true;
        },

        removeUserData: (state) => {
            state.userData = null;
            state.currentuser = null;
            state.userToken = null;
            localStorage.removeItem('userData');
            localStorage.removeItem('access_token');
            state.currentUserId = null;
            state.headerToken=false;
        }
    }
})

export default authSlice.reducer;
export const { setUserData, removeUserData,currentUser,setuserAccess } = authSlice.actions;