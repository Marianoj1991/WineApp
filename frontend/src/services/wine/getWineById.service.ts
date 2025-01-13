
import axiosInstance from '../../api/axiosConfig'
import { IWine } from '../../types'

export async function getWineById(id: number): Promise<IWine | undefined> {
  try {
    const { data } = await axiosInstance.get(`/wine/${id}`)
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