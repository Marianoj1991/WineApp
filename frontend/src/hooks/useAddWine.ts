
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
    formState: { errors }
  } = useForm<WineSchemaType>({
    resolver: zodResolver(wineSchema),
    mode: 'onChange'
  })

  const onSubmitHook: SubmitHandler<WineSchemaType> = async (formData) => {

    const { price, ...rest } = formData

    try {
      const body = {
        userId: +userId,
        price: +price,
        ...rest,
      }

      const data = await addWineService(body);
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
    errors
  }
}
