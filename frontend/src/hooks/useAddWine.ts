import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IUseAuthFormReturn } from '../types/useAuthReturnForm'
import { useAppDispatch } from './userState.hook'
import { wineSchema, WineSchemaType } from '../validations/wineSchema.zod'

export const useAddWine = (): IUseAuthFormReturn<WineSchemaType> => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WineSchemaType>({
    resolver: zodResolver(wineSchema),
    mode: 'onChange'
  })

  const onSubmitHook: SubmitHandler<WineSchemaType> = async (
    formData,
  ) => {
    
  }

  return {
    handleSubmit,
    register,
    onSubmitHook,
    errors
  }
}
