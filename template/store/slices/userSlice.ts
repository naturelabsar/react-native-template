import { createSlice } from '@reduxjs/toolkit'

// Reducers are the actions of the specific slice

// check this type
//type UserState = Pick<Users, 'id' | 'username'>

const initialState = {
  id: 0,
  username: '',
  name: '',
  lastName: '',
  userType: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setName } =  userSlice.actions

// Export reducer
export default userSlice.reducer