import axiosInstance from '../../api/axiosConfig'
import { IWine } from '../../types'


export async function updateWine(body: Record<string, any>): Promise<IWine | undefined> {

  const id = body.get('id')

  try {
    const { data } = await axiosInstance.put(`/wine/${id}`, body)
    return data
  } catch (err) {
    if (err instanceof Error) {
      console.log(err)
      throw new Error(err.message)
    } else {
      console.log('Unknown error', err)
      throw new Error('An unknown error occurred')
    }
  }
}
