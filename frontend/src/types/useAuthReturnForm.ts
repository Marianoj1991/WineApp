import {
  UseFormRegister,
  SubmitHandler,
  FieldErrors,
  FieldValues,
} from 'react-hook-form'

export interface IUseAuthFormReturn<FormSchema extends FieldValues> {
  register: UseFormRegister<FormSchema>
  handleSubmit: (
    onValid: SubmitHandler<FormSchema>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  isLoginPath: boolean
  errors: FieldErrors<FormSchema>
  onSubmitHook:  SubmitHandler<FormSchema>
}
