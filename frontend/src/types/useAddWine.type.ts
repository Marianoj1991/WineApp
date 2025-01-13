import {
  UseFormRegister,
  SubmitHandler,
  FieldErrors,
  FieldValues,
  UseFormSetValue
} from 'react-hook-form'

export interface IUseAddWineFormReturn<FormSchema extends FieldValues> {
  register: UseFormRegister<FormSchema>
  handleSubmit: (
    onValid: SubmitHandler<FormSchema>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  errors: FieldErrors<FormSchema>
  onSubmitHook: SubmitHandler<FormSchema>
  control: any
  setValue: UseFormSetValue<{
    name: string
    description: string
    price: string
    location: string
    file?: File | undefined
  }>
}
