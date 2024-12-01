// import { ILogin, IRegister } from "../types";

interface IInitialFormState {
  name: string,
  lastname: string
  password: string
  username: string
  email: string
}

export type initialFormStateType = IInitialFormState
// interface initialFormState extends ILogin, IRegister {}

export const loginRegisterFormIE: initialFormStateType  = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    username: ''
} 



// ESTA FUE MI PRIMERA OPCIÓN DE TIPADO DEL FORMULARIO DE inicio/registro, 
// export const loginInitialState: ILogin = {
//   email: '',
//   username: '',
//   password: ''
// }

// export const registerInitialState: IRegister = {
//   name: '',
//   lastname: '',
//   email: '',
//   password: '',
//   username: ''
// }

