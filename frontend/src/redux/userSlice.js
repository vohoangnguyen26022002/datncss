import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },

        passWordHistories: {
            allPassWord: null,
            isFetching: false,
            error: false,
        },

    },
    reducers: {
        getUserStart: (state) => {
            state.users.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
        },
        getUsersFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
        deleteUserStart: (state) => {
            state.users.isFetching = true;
        },
        deleteUserSuccess: (state, action) =>{
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deteleUserFailed: (state, action) =>{
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },

        UpdateUserStart: (state) => {
            state.users.isFetching = true;
        },
        UpdateUserSuccess: (state, action) => {
            state.users.isFetching = false;
            const updatedUsers = state.users.allUsers.map((user) =>
                user.id === action.payload.id ? action.payload : user
            );
            state.users.allUsers = updatedUsers;
            state.msg = action.payload;
        },
        UpdateUserFailed: (state, action) =>{
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
        getPassHistoryStart: (state) => {
            state.passWordHistories.isFetching = true;
        },
        getPassHistorySuccess: (state, action) => {
            state.passWordHistories.isFetching = false;
            state.passWordHistories.allPassWord = action.payload;
        },
        getPassHistoryFailed: (state) => {
            state.passWordHistories.isFetching = false;
            state.passWordHistories.error = true;
        },
          updateUsersList: (state, action) => {
            state.users.allUsers = action.payload;
        }
    }
})

export const {
    getUserStart,
    getUserSuccess, 
    getUsersFailed,
    deleteUserStart,
    deleteUserSuccess,
    deteleUserFailed,
    UpdateUserStart,
    UpdateUserSuccess,
    UpdateUserFailed,
    getPassHistoryStart,
    getPassHistorySuccess,
    getPassHistoryFailed,
    updateUsersList

} = userSlice.actions;

export default userSlice.reducer;