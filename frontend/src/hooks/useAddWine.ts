
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from './userState.hook'
import { wineSchema, WineSchemaType } from '../validations/wineSchema.zod'
import { IUseAddWineFormReturn } from '../types/useAddWine.type'
import { addWineService } from '../services/index.services'
import { addWineForm } from '../redux/user-store/user.slice'

export const useAddWine = (): IUseAddWineFormReturn<WineSchemaType> => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userId = useAppSelector((state) => state.user.id)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<WineSchemaType>({
    resolver: zodResolver(wineSchema),
    mode: 'onChange'
  })

  const onSubmitHook: SubmitHandler<WineSchemaType> = async (formDataHook) => {


    const formData = new FormData()
    if (formDataHook.file){
      formData.append('file', formDataHook.file)
    }
    formData.append('name', formDataHook.name)
    formData.append('description', formDataHook.description)
    formData.append('price', String(formDataHook.price))
    formData.append('location', formDataHook.location)
    formData.append('userId', String(userId))

    try {
      const data = await addWineService(formData);
      dispatch(addWineForm(data))
      navigate('/home')

    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error('Ocurrió un error inesperado')
      }
    }
  }

  return {
    handleSubmit,
    register,
    onSubmitHook,
    errors,
    control
  }
}
