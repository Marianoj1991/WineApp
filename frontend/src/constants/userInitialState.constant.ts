import { IUser } from "../types";

export const initialState: IUser = JSON.parse(
  localStorage.getItem('user') || 'null'
) || { name: '', email: '', lastname: '', username: '', id: '', wines: [] }
