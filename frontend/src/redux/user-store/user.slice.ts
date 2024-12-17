import { createSlice, PayloadAction } from'@reduxjs/toolkit'
import { initialState } from '../../constants/userInitialState.constant'
import { DecodedToken } from '../../types'


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login(state, action: PayloadAction<DecodedToken>) {
      const { email, lastname, username, name, sub, wines } = action.payload
      state.id = sub
      state.email = email
      state.name = name
      state.lastname = lastname
      state.username = username
      state.wines = wines
      localStorage.setItem('user', JSON.stringify(state))
    },

    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return initialState
    },

    addWineForm(state, action) {
      const wines = action.payload
      if (Array.isArray(wines)) {
        state.wines.push(...wines)
      } else {
        state.wines.push(wines)
      }
      localStorage.setItem(
        'user',
        JSON.stringify({ ...state, wines: state.wines })
      )
    },
    
    removeWine(state, action) { 
      state.wines = state.wines.filter(wine => wine.id !== action.payload)
      localStorage.setItem('user', JSON.stringify({...state, wines: state.wines}))
    }

  }
})

export const { login, logout, addWineForm, removeWine } = userSlice.actions
export default userSlice.reducer