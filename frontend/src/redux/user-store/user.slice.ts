import { createSlice, PayloadAction } from'@reduxjs/toolkit'
import { initialState } from '../../constants/userInitialState.constant'
import { IUser } from '../../types'

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login (state, action: PayloadAction<IUser>) {
      const { email, name, lastname, username } = action.payload;
      state.email = email;
      state.name = name;
      state.lastname = lastname;
      state.username = username
      localStorage.setItem('user', JSON.stringify(state))
    },

    logout (state) {
      state.email = ''
      state.name = ''
      state.lastname = ''
      state.username = ''
      localStorage.removeItem('user')
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer