import axiosInstance from '../../api/axiosConfig'
import { IWine } from '../../types'

export async function deleteWineService(
  id: number
): Promise<IWine | undefined> {
  try {
    const resp = await axiosInstance.delete(`/wine/${id}`)
    return resp.data
  } catch (err) {
    console.log('ERROR: ', err)
    if (err instanceof Error) {
      console.log(err)
      throw new Error(err.message)
    } else {
      console.log('Unknown error', err)
      throw new Error('An unknown error occurred')
    }
  }
}
