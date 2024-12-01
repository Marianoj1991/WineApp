// STYLES
import styles from './loginForm.module.css'
import { useAuthForm } from '../../hooks/useAuthForm'
import { Link } from 'react-router-dom'

export function LoginForm(): JSX.Element {
  const { handleSubmit, isLoginPath, register, errors, onSubmitHook } =
    useAuthForm()

  console.log(errors)

  return (
    <div className={styles.container}>
      {isLoginPath ? <h2>Inicia Sesión</h2> : <h2>Registrate</h2>}
      <form
        onSubmit={handleSubmit((data) => onSubmitHook(data))}
        className={styles.form}
      >
        {!isLoginPath && (
          <div className={styles.nameField}>
            <label
              htmlFor='nombreId'
              className={styles.label}
            >
              Nombre:
              <input
                className={styles.input}
                id='nombreId'
                type='text'
                placeholder='Mariano, Fernando...'
                {...register('name')}
              />
            </label>
            {errors.name && <p>{errors.name.message}</p>}
            <label
              htmlFor='apellidoId'
              className={styles.label}
            >
              Apellido:
              <input
                className={styles.input}
                id='apellidoId'
                type='text'
                placeholder='Gomez, Jimenez...'
                {...register('lastname')}
              />
            </label>
            {errors.lastaname && <p>{errors.lastname.message}</p>}
          </div>
        )}

        {isLoginPath ? (
          <>
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
            {errors.email && <p>{errors.email.message}</p>}
          </>
        ) : (
          <>
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
            {errors.email && <p>{errors.email.message}</p>}

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
            {errors.username && <p>{errors.username.message}</p>}
          </>
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
        {!isLoginPath && (
          <label
            htmlFor='confirmPasswordId'
            className={styles.label}
          >
            Confimar password:
            <input
              className={styles.input}
              id='confirmPasswordId'
              type='password'
              placeholder='Password'
              {...register('confirmPassword')}
            />
          </label>
        )}

        <button className={styles.button}>
          {isLoginPath ? 'Inicia Sesión' : 'Registrate'}
        </button>

        {/* {<p>{JSON.stringify(errors)}</p>} */}
      </form>
      <div className={styles.footer}>
        {isLoginPath ? (
          <p>
            No tienes una cuenta?{' '}
            <Link
              className={styles.link}
              to={'/register'}
            >
              Click aquí
            </Link>
          </p>
        ) : (
          <p>
            Ya tienes una cuenta?{' '}
            <Link
              className={styles.link}
              to={'/login'}
            >
              Click aqui
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
