import { jwtDecode } from "jwt-decode"
import axiosInstance from "../../api/axiosConfig"

interface IRequestBody {
  name: string
  lastname: string
  username: string
  email: string
  password: string
}

interface DecodedToken {
  email: string
  exp: number
  iat: number
  lastname: string
  name: string
  sub: number
  username: string
  access_token: string
}

export async function registerService(
  body: IRequestBody
): Promise<DecodedToken> {
  try {
    if (!body) {
      throw new Error('No body provided')
    }

    const resp = await axiosInstance.post<DecodedToken>('http://localhost:3000/auth/register', body)

    const data = jwtDecode<DecodedToken>(resp.data.access_token)

    console.log('RESP', resp)
    console.log('DATA', data)

    localStorage.setItem('token', resp.data.access_token)

    return {
      ...data
    }
  } catch (err: any) {
    if (err.response && err.response.status === 409) {
      console.log(err)
      alert(err.response.data.message)
      throw new Error(err.response.data.message)
    } else {
      console.log(err)
      throw new Error('User not registered')
    }
  }
}
