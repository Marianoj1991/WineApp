import { AddWineForm } from '../../components'
import styles from './addWinePage.module.css'

export function AddWinePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <AddWineForm />
    </div>
  )
}