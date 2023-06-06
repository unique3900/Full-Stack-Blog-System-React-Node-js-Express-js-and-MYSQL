import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')) : null,
        currentuser: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : null,
        currentUserId:localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).id : null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(state.userData));
            state.currentuser = state.userData.name;
            state.currentUserId = state.userData.id;
        },

        removeUserData: (state) => {
            state.userData = null;
            state.currentuser = null;
            localStorage.removeItem('userData');
            state.currentUserId = null;
        }
    }
})

export default authSlice.reducer;
export const { setUserData, removeUserData,currentUser } = authSlice.actions;