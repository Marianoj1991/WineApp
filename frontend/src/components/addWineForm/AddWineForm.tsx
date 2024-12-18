
import { Controller } from 'react-hook-form'
import { useAddWine } from '../../hooks/useAddWine'
import styles from './addWineForm.module.css'

export function AddWineForm(): JSX.Element {

  const { handleSubmit, register, onSubmitHook, errors, control } = useAddWine()

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmitHook)}
    >
      <h2>¡Agrega un Nuevo Vino a la Colección!</h2>
      <label
        htmlFor='nombreId'
        className={styles.label}
      >
        Name:
        <input
          className={styles.input}
          id='nombreId'
          placeholder='Los Haroldos, Las Perdices...'
          {...register('name')}
        />
      </label>
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <label
        htmlFor='descriptionId'
        className={styles.label}
      >
        Description:
        <input
          className={styles.input}
          id='descriptionId'
          type='text'
          placeholder='Con cuerpo, no me gustó, etc...'
          {...register('description')}
        />
      </label>
      {errors.description && (
        <p className={styles.error}>{errors.description.message}</p>
      )}

      <label
        htmlFor='priceId'
        className={styles.label}
      >
        Price:
        <input
          className={styles.input}
          id='priceId'
          type='text'
          placeholder='$5000'
          {...register('price')}
        />
      </label>
      {errors.price && <p className={styles.error}>{errors.price.message}</p>}

      <label
        htmlFor='locationId'
        className={styles.label}
      >
        Location:
        <input
          className={styles.input}
          id='locationId'
          type='text'
          placeholder='Google location o user description location'
          {...register('location')}
        />
      </label>
      {errors.location && (
        <p className={styles.error}>{errors.location.message}</p>
      )}

      <label
        htmlFor='imageId'
        className={styles.label}
      >
        Image:
        <Controller
          name='file'
          control={control}
          render={({ field }) => (
            <input
              className={styles.input}
              id='imageId'
              type='file'
              onChange={(event) => {
                const file = event.target.files?.[0]
                field.onChange(file) 
              }}
              accept='.png,.jpeg,.jpg' 
            />
          )}
        />
      </label>
      {errors.file && <p className={styles.error}>{errors.file.message}</p>}

      <button className={styles.button}>Add to my collection</button>
    </form>
  )
}
