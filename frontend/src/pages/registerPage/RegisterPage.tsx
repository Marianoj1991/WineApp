import { LoginForm } from '../../components/loginForm/LoginForm'
import styles from './registerPage.module.css'

// interface Props {}s
export function RegisterPage(): JSX.Element {
  return (
    <div className={styles.container}>
      {/* <h1>Login Page</h1> */}
      <LoginForm />
    </div>
  )
}