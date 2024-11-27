import { Link, useLocation } from 'react-router-dom'
import styles from './loginForm.module.css'
import { useState } from 'react'
import { ILogin, IRegister } from '../../types'
import {
  loginInitialState,
  registerInitialState
} from '../../constants/formConstants'

type userDataType = ILogin | IRegister

export function LoginForm(): JSX.Element {
  const { pathname } = useLocation()
  const isLoginPath: boolean = pathname === '/login' ? true : false
  const [userData] = useState<userDataType>(
    isLoginPath ? loginInitialState : registerInitialState
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoginPath) {
      console.log('Login Submit')
    } else {
      console.log('Register Submit')
    }
  }

  return (
    <div className={styles.container}>
      <h1>Bienvenido a WineApp</h1>
      {isLoginPath ? <h2>Inicia Sesión</h2> : <h2>Registrate</h2>}
      <form onSubmit={(e) => {
        handleSubmit(e)
      }} className={styles.form}>
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
          Email o username:
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

        <button className={styles.button}>
          {isLoginPath ? 'Inicia Sesión' : 'Registrate'}
        </button>
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
