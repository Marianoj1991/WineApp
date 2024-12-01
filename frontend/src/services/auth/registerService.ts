import axiosInstance from "../../api/axiosConfig"

interface IRequestBody {
  name: string
  lastname: string
  username: string
  email: string
  password: string
}

interface IResponseBody {
  id: number
  email: string
  name: string
  lastname: string
  username: string
}

export async function registerService(
  body: IRequestBody | undefined
): Promise<IResponseBody | undefined> {
  try {
    if (!body) {
      throw new Error('No body provided')
    }
    const resp = await axiosInstance.post<IResponseBody>('http://localhost:3000/users', body)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
