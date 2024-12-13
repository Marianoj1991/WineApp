import { useState } from "react"
import { useAppDispatch } from "./userState.hook"
import { deleteWineService } from "../services/wine/deleteWine.service"
import { removeWine } from "../redux/user-store/user.slice"

export interface IUseDeleteWines {
  loading: boolean,
  err: string | null,
  deleteWine: (id: number) => void
}

export const useDeleteWines = (): IUseDeleteWines => {

  const [ loading, setLoading ] = useState(false)
  const [ err, setErr ] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const deleteWine = async (id: number) => {
    
    try {
      id = +id
      setLoading(true)
      await deleteWineService(id)
      dispatch(removeWine(id))
    } catch (err: any) {
      alert(err.message)
      setErr('We are having problem with wine deletion')
      setTimeout(() => {
        setErr(null)
      }, 5000)
    } finally {
      setLoading(false)
      alert('Wine deleted successfully')
    }

  }

  return {
    loading,
    err,
    deleteWine
  }

}