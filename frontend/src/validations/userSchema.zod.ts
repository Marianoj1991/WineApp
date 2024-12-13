import {z, ZodType} from 'zod'

export type UserLoginType = {
  email: string,
  password: string
}

export type UserRegisterType = {
  name: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

export const userLoginSchema: ZodType<UserLoginType> = z.object({
  email: z.string().min(10, 'Email must be at least 10 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const userRegisterSchema: ZodType<UserRegisterType> = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long.'),
    lastname: z.string().min(3, 'Lastname must be at least 3 characters long.'),
    username: z.string().min(3, 'Username must be at least 3 characters long.')
    .refine(value => !value.includes('@'), {
      message: 'Username must not contain "@".'
    } )
    ,
    email: z.string().min(8, 'Mail must be at least 8 characters long.').email({
      message: 'Please enter a valid email.'
    }),
    password: z.string().min(8, 'Password must be at least 8 characters long.'),
    confirmPassword: z.string()
  })
  .refine((data: UserRegisterType) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword']
  })



export type userRegisterSchemaType = z.infer<typeof userRegisterSchema>
export type userLoginSchemaType = z.infer<typeof userLoginSchema>
