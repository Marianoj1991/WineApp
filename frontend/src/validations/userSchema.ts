import {z} from 'zod'

export const userLoginSchema = z.object({
  email: z.string().min(10, 'Mail must be at least 10 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const userRegisterSchema = userLoginSchema.extend({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  lastname: z.string().min(3, 'Lastname must be at least 3 characters long'),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().min(8, 'Mail must be at least 8 characters long').email({
    message: 'Please enter a valid email'
  }),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['ConfirmPassword']
})



export type userRegisterSchemaType = z.infer<typeof userRegisterSchema>
export type userLoginSchemaType = z.infer<typeof userLoginSchema>