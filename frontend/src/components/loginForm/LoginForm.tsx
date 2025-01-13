// STYLES
import styles from './loginForm.module.css'
import { useLoginForm } from '../../hooks/useLoginForm'
import { Link } from 'react-router-dom'

export function LoginForm(): JSX.Element {
  const { handleSubmit, register, errors, onSubmitHook } = useLoginForm()

  return (
    <div className={styles.container}>
      <h2>Welcome Back</h2>
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

        <button className={styles.button}>Log In</button>

        <div className={styles.footer}>
          <p>
            Don{"'"}t you have an account?{' '}
            <Link
              className={styles.link}
              to={'/register'}
            >
              Click here
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
