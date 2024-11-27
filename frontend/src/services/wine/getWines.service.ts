import axiosInstance from "../../api/axiosConfig";
import { IWine } from "../../types";

export async function getWinesService(): Promise<IWine[] | undefined> {
  try {
    const { data } = await axiosInstance.get('/wine')
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