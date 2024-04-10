import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const userEndpoint = https://jsonplaceholder.typicode.com/users

// creating action
export const fetchUsers = createAsyncThunk('fetchAllUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        users: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        }) 
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = true;
        });
    }
});


export default userSlice.reducer;