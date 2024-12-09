import {z, ZodType} from 'zod'


type WineTipe = {
  name: string,
  description: string,
  price: string,
  location: string,
}


export const wineSchema: ZodType<WineTipe> = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long.'),
    description: z.string().min(3, 'Description must be at least 3 characters long.'),
    price: z.string().min(3, 'Price must be at least 3 characters long.'),
    location: z.string().min(8, 'Mail must be at least 8 characters long.')})

export type WineSchemaType = z.infer<typeof wineSchema>
