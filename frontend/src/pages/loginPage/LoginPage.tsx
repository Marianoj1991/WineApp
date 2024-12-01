import { LoginForm } from "../../components/loginForm/LoginForm";

import styles from './loginPage.module.css'

// interface Props {}
export function LoginPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}