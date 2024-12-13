import axiosInstance from '../../api/axiosConfig'
import { IWine } from '../../types'

export async function addWineService(body: Record<string, any>): Promise<IWine | undefined> {
  try {
    console.log('ADDWINESERVICE', body)
    const resp = await axiosInstance.post('/wine', body)
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
