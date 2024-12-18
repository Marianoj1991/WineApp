
import {z} from 'zod'


// Validación personalizada para el campo de tipo archivo
const fileValidation = z
  .any()
  .refine((file) => file instanceof File, {
    message: 'Debe ser un archivo válido',
  })
  .refine((file) => file?.size <= 4 * 1024 * 1024, {
    message: 'El archivo no debe exceder los 4 MB',
  })
  .refine((file) => /(image\/jpeg|image\/png|image\/jpg)/.test(file?.type), {
    message: 'El archivo debe ser un formato de imagen válido (png, jpeg, jpg)',
  });

export const wineSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long.'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters long.'),
  price: z
    .string()
    .min(4, 'Price must be at least 4 characters long.')
    .refine(
      (val) => {
        return !isNaN(Number(val))
      },
      { message: 'Price must be a valid number.' }
    ),
  location: z.string().min(8, 'Location must be at least 8 characters long.'),
  file: fileValidation.optional()
})

export type WineSchemaType = z.infer<typeof wineSchema>
 