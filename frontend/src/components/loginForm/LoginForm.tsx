// STYLES
import styles from './loginForm.module.css'
import { useLoginForm } from '../../hooks/useLoginForm'
import { Link } from 'react-router-dom'

export function LoginForm(): JSX.Element {
  const { handleSubmit, register, errors, onSubmitHook } = useLoginForm()

  return (
    <div className={styles.container}>
      <h2>Inicia Sesión</h2>
      <form
        onSubmit={handleSubmit(onSubmitHook)}
        className={styles.form}
        >
        <label
          htmlFor='emailId'
          className={styles.label}
        >
          Email o username:
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

        <button className={styles.button}>{'Inicia Sesión'}</button>

        <div className={styles.footer}>
          <p>
            No tienes una cuenta?{' '}
            <Link
              className={styles.link}
              to={'/register'}
            >
              Click aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
