import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { loginService } from '../services/auth/loginService'
import { IUseAuthFormReturn } from '../types/useAuthReturnForm'
import {
  userLoginSchema,
  userLoginSchemaType
} from '../validations/userSchema.zod'
import { useAppDispatch } from './userState.hook'
import { login } from '../redux/user-store/user.slice'

export const useLoginForm = (): IUseAuthFormReturn<userLoginSchemaType> => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<userLoginSchemaType>({
    resolver: zodResolver(userLoginSchema),
    mode: 'onChange'
  })

  const onSubmitHook: SubmitHandler<userLoginSchemaType> = async (
    formData,
  ) => {
    const { email, password } = formData
    if (!email || !password) {
      console.error('Por favor completar los campos del formulario')
      return
    }
    try {
      const identifier = email.includes('@') ? 'email' : 'username'
      const data = await loginService({
        [identifier]: email,
        password
      })
      dispatch(login(data))
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
