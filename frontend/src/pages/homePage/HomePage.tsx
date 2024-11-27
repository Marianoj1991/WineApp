import { useEffect, useState } from 'react'
import { IWine } from '../../types/wine-type'
import { Wines } from '../../components/wines/Wines'
import { getWinesService } from '../../services/index.services'

// STYLES
import styles from './homePage.module.css'
 
export function HomePage(): JSX.Element {

  const [ wines, setWines ] = useState<IWine[]>([])

  useEffect(() => {
    async function getWines() {
      try {
        const data = await getWinesService() 
        if (data) {

          setWines(data)
        } 
        console.log('DATA: ', data)
      } catch (err) {
        console.log(err)
      }
    }

    getWines()
  }, [])

  return (
    <div className={styles.container}>

      <form className={styles.form}>
        <input type="text" placeholder='Bodega Sottano, Los Haroldos' className={styles.input} />
        <button className={styles.button}>
          Buscar
        </button>
      </form>

      <div className={styles.divisor}></div>

      <Wines wines={wines} />
      
    </div>
  )
}  
