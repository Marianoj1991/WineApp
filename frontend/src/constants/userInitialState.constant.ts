import { IUser } from '../types'

export const initialState: IUser = JSON.parse(
  localStorage.getItem('user') || 'null') 

  // SI COLOCAMOS LA SIGUIENTE LINEA DE CODIGO SIEMPRE HAY UN OBJETO USUARIO
  // || { name: '', email: '', lastname: '', username: '' }
