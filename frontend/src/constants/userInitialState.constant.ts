import { IUser } from "../types";

export const initialState: IUser = JSON.parse(
  localStorage.getItem('user') || 'null'
) || { name: '', email: null, lastname: '', username: '', id: '', wines: [] }
