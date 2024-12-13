import { IWine } from "./wine-type"

export interface DecodedToken {
  email: string
  exp: number
  iat: number
  lastname: string
  name: string
  sub: number
  username: string
  wines: IWine[]
  access_token: string
}
