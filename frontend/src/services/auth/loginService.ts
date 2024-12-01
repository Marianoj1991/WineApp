import axiosInstance from "../../api/axiosConfig";

interface IRequestBody {
  password: string,
  [key: string]: string
}

interface IResponseBody {
  id: number
  email: string
  name: string
  lastname: string
  username: string
}

export async function loginService(body: IRequestBody): Promise<IResponseBody> {
  try {
    console.log(body)
    const resp = await axiosInstance.post<IResponseBody>('/users/user', body)
    return resp.data
  } catch (err) {
    console.log(err)
    throw new Error('Server not respond')
  }
}
