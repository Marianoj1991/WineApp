import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    logout(state) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      state.name = ''
      state.email = null
      state.lastname = ''
      state.username = ''
      state.id = null
      state.wines = []
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
      state.wines = state.wines.filter((wine) => wine.id !== action.payload)
      localStorage.setItem(
        'user',
        JSON.stringify({ ...state, wines: state.wines })
      )
    },

    updateWineAction(state, action) {
      const updateWine = action.payload
      const index = state.wines.findIndex(wine => wine.id === updateWine.id)

      if (index !== -1) {
        state.wines[index] = updateWine
      } else {
        state.wines.push(updateWine)
      }

      localStorage.setItem('user', JSON.stringify({...state, wines:state.wines}))

    }
  }
})

export const { login, logout, addWineForm, removeWine, updateWineAction } =
  userSlice.actions
export default userSlice.reducer
