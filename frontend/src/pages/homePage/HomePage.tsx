import { Wines } from '../../components/wines/Wines'
import { useAppSelector } from '../../hooks/userState.hook'

// STYLES
import styles from './homePage.module.css'

export function HomePage(): JSX.Element {
  
  const wines = useAppSelector((state) => state.user.wines)

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='Bodega Sottano, Los Haroldos'
          className={styles.input}
        />
        <button className={styles.button}>Buscar</button>
      </form>

      <div className={styles.divisor}></div>

      <Wines wines={wines} />
    </div>
  )
}
