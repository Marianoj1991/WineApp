import { IWine } from "./wine-type"


export type UserLocalStorageType = {
  email: string
  exp: number
  iat: number
  lastname: string
  name: string
  sub: number
  username: string
  wines: IWine[]
}