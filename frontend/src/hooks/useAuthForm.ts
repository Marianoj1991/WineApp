import { useNavigate, useLocation } from 'react-router-dom'
import { login } from '../redux/user-store/user.slice'
import { useAppDispatch } from './userState.hook'
import { loginService } from '../services/auth/loginService'
import { registerService } from '../services/auth/registerService'
import { IUseAuthFormReturn } from '../types/useAuthReturnForm'
import {
  userLoginSchema,
  userLoginSchemaType,
  userRegisterSchema,
  userRegisterSchemaType
} from '../validations/userSchema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { ZodSchema } from 'zod'

type SchemaType = userRegisterSchemaType | userLoginSchemaType

export const useAuthForm = (): IUseAuthFormReturn<SchemaType> => {
  const { pathname } = useLocation()
  const isLoginPath = pathname === '/login'
  const [schemaState, setSchemaState] =
    useState<ZodSchema<any>>(userRegisterSchema)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setSchemaState(isLoginPath ? userLoginSchema : userRegisterSchema )
  }, [pathname])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schemaState),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<SchemaType> = async (
    formData
  ) => {
    console.log(formData)
    if (isLoginPath) {
      if (formData) {
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
          console.log(data)
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
    } else {
      if (formData) {
        const { email, password, name, lastname, username } = formData
        try {
          const body = { email, password, name, lastname, username }
          const data = await registerService(body)
          if (!data) {
            throw new Error('Ha ocurrido un error')
          }
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
    }
  }

  return {
    handleSubmit,
    isLoginPath,
    register,
    onSubmitHook: onSubmit,
    errors
  }
}
