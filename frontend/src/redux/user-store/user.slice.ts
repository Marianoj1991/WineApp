import { createSlice, PayloadAction } from'@reduxjs/toolkit'
import { initialState } from '../../constants/userInitialState.constant'
import { userLocalStorage } from '../../types'


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login(state, action: PayloadAction<userLocalStorage>) {
      const { email, lastname, username, name, sub } = action.payload
      state.id = sub
      state.email = email
      state.name = name
      state.lastname = lastname
      state.username = username
      localStorage.setItem('user', JSON.stringify(state))
    },

    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return initialState
    },
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer