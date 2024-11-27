import { ILogin, IRegister } from "../types";

export const loginInitialState: ILogin = {
  email: '',
  username: '',
  password: ''
}

export const registerInitialState: IRegister = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  username: ''
}

