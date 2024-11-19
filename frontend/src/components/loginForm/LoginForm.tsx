import { Link, useLocation } from 'react-router-dom'
import styles from './loginForm.module.css'


export function LoginForm(): JSX.Element {  
  const { pathname } = useLocation()

  const register: boolean = pathname === '/login' ? false : true

  return (
    <div className={styles.container}>
      <h1>Inicia Sesión</h1>
      <form className={styles.form}>

      {
        register &&
        <div className={styles.nameField} >
          <input type="text" placeholder='Mariano, Fernando' />
          <input type="text" placeholder='Gomez, Jimenez' />
        </div>

      }
      

        <input className={styles.input} type="text" placeholder='Email' />
        <input className={styles.input} type="password" placeholder='Password' />

      <div className={styles.footer}>
        {
          register ?
          <p>Ya tienes una cuanta? <Link className={styles.link} to={'/login'}>Click aqui</Link></p> :
          <p>No tienes una cuenta? <Link className={styles.link} to={'/register'}>Click aquí</Link></p>
        }
      </div>

      </form>
    </div>
  )
}