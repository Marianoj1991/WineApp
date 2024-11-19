import { Link, useLocation } from 'react-router-dom'
import styles from './loginForm.module.css'

export function LoginForm(): JSX.Element {
  const { pathname } = useLocation()

  const register: boolean = pathname === '/login' ? false : true

  return (
    <div className={styles.container}>
      <h1>Bienvenido a WineApp</h1>
      {register ? <h2>Registrate</h2> : <h2>Inicia Sesión</h2>}
      <form className={styles.form}>
        {register && (
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
              />
            </label>
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
              />
            </label>
          </div>
        )}

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
          />
        </label>
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
          />
        </label>

        <button className={styles.button} >{register ? 'Registrate' : 'Inicia Sesión'}</button>
      </form>
        <div className={styles.footer}>
          {register ? (
            <p>
              Ya tienes una cuenta?{' '}
              <Link
                className={styles.link}
                to={'/login'}
              >
                Click aqui
              </Link>
            </p>
          ) : (
            <p>
              No tienes una cuenta?{' '}
              <Link
                className={styles.link}
                to={'/register'}
              >
                Click aquí
              </Link>
            </p>
          )}
        </div>
    </div>
  )
}
