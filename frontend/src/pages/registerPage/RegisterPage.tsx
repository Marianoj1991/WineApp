
import { RegisterForm } from '../../components/registerForm/RegisterForm'
import styles from './registerPage.module.css'

// interface Props {}s
export function RegisterPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  )
}