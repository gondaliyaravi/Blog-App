import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        setUsers: (state, action) => {
            state.count = action.payload
        }
    }
})

export const {setUsers } = userSlice.actions;
export default userSlice.reducer;
