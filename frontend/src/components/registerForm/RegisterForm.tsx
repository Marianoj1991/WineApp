import { Link } from 'react-router-dom'
import { useRegisterForm } from '../../hooks/useRegisterForm'

// STYLES
import styles from './registerForm.module.css'

export function RegisterForm(): JSX.Element {
  
  const { handleSubmit, register, errors, onSubmitHook } = useRegisterForm()

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmitHook(data))}
      className={styles.form}
    >
      <h2>Create Your Account</h2>
      <div className={styles.nameField}>
        <label
          htmlFor='nombreId'
          className={styles.label}
        >
          Name:
          <input
            className={styles.input}
            id='nombreId'
            placeholder='Mariano, Fernando...'
            {...register('name')}
          />
          {errors.name && <p className={styles.errorName}>{errors.name.message}</p>}
        </label>
        <label
          htmlFor='apellidoId'
          className={styles.label}
        >
          Lastname:
          <input
            className={styles.input}
            id='apellidoId'
            type='text'
            placeholder='Gomez, Jimenez...'
            {...register('lastname')}
          />
          {errors.lastname && (
            <p className={styles.errorName}>{errors.lastname.message}</p>
          )}
        </label>
      </div>

      <label
        htmlFor='emailId'
        className={styles.label}
      >
        Email:
        <input
          className={styles.input}
          id='emailId'
          type='text'
          placeholder='email@example.com'
          {...register('email')}
        />
      </label>
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <label
        htmlFor='usernameId'
        className={styles.label}
      >
        Username:
        <input
          className={styles.input}
          id='usernameId'
          type='text'
          placeholder='email@example.com'
          {...register('username')}
        />
      </label>
      {errors.username && (
        <p className={styles.error}>{errors.username.message}</p>
      )}
      <label
        htmlFor='passwordId'
        className={styles.label}
      >
        Password:
        <input
          className={styles.input}
          id='passwordId'
          type='password'
          placeholder='Password'
          {...register('password')}
        />
      </label>
      <label
        htmlFor='confirmPasswordId'
        className={styles.label}
      >
        Confirm password:
        <input
          className={styles.input}
          id='confirmPasswordId'
          type='password'
          placeholder='Password'
          {...register('confirmPassword')}
        />
      </label>
      {errors.confirmPassword && (
        <p className={styles.error}>{errors.confirmPassword.message}</p>
      )}

      <button className={styles.button}>Sign In</button>
      <div className={styles.footer}>
        <p>
          Do you already have an account?{' '}
          <Link
            className={styles.link}
            to={'/login'}
          >
            Click here
          </Link>
        </p>
      </div>
    </form>
  )
}
