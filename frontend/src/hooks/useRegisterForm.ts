import { useNavigate } from 'react-router-dom'
import { login } from '../redux/user-store/user.slice'
import { useAppDispatch } from './userState.hook'
import { IUseAuthFormReturn } from '../types/useAuthReturnForm'
import {
  userRegisterSchema,
  userRegisterSchemaType
} from '../validations/userSchema.zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerService } from '../services/auth/registerService'

export const useRegisterForm =
  (): IUseAuthFormReturn<userRegisterSchemaType> => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<userRegisterSchemaType>({
      resolver: zodResolver(userRegisterSchema),
      mode: 'onChange'
    })

    const onSubmit: SubmitHandler<userRegisterSchemaType> = async (
      formData
    ) => {
      const { confirmPassword, ...body } = formData
      if (!formData) {
        console.error('Por favor completar los campos del formulario')
        return
      }
      try {
        const data = await registerService(body)
        dispatch(login(data))
        navigate('/home')
      } catch (err) {
        console.log('here')
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
      onSubmitHook: onSubmit,
      errors
    }
  }
