import { CardWine } from '../../components/cardWine/CardWine'
import styles from './homePage.module.css'

// interface Props {}
export function HomePage(): JSX.Element {
  return (
    <div className={styles.container}>
    
      <form className={styles.form}>
        <input type="text" placeholder='Bodega Sottano, Los Haroldos' className={styles.input} />
        <button className={styles.button}>
          Buscar
        </button>
      </form>

      <div className={styles.divisor}></div>
    
      <CardWine />
      <CardWine />
      
    </div>
  )
}

  
