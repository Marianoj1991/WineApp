import { jwtDecode } from "jwt-decode";
import axiosInstance from "../../api/axiosConfig";
import { DecodedToken } from "../../types/decodedToken.type";


interface IRequestBody {
  password: string,
  [key: string]: string
}

interface IResponseBody {
  email: string
  exp: number
  iat: number
  lastname: string
  name: string
  sub: number
  username: string
  access_token: string
}

export async function loginService(body: IRequestBody): Promise<DecodedToken> {
  try {
    const resp = await axiosInstance.post<IResponseBody>('/auth/login', body)

    const data = jwtDecode<DecodedToken>(resp.data.access_token)

    localStorage.setItem('token', resp.data.access_token)
    console.log(data)
    return {
      ...data
    }
  } catch (err: any) {
    if(err.response) {
      console.log('AQUILOGINSERVICE1')
      alert(err.response.data.message)
      throw new Error(err.response.data.message)
    } else {
      console.log('AQUILOGINSERVICE3')
      console.log(err)
      throw new Error('Server not respond')
    }
    }
}
