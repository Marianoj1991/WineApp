import {
  UseFormRegister,
  SubmitHandler,
  FieldErrors,
  FieldValues
} from 'react-hook-form'

export interface IUseAddWineFormReturn<FormSchema extends FieldValues> {
  register: UseFormRegister<FormSchema>
  handleSubmit: (
    onValid: SubmitHandler<FormSchema>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  errors: FieldErrors<FormSchema>
  onSubmitHook: SubmitHandler<FormSchema>,
  control: any
}
