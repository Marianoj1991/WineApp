
import { ChangeEvent } from 'react'
import { Wines } from '../../components/wines/Wines'
import useFilters from '../../hooks/useFilters'

// STYLES
import styles from './homePage.module.css'

export function HomePage(): JSX.Element {
  
  const { filterPrice, handleChangePrice, filteredWines } = useFilters()

  const onHandleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value)
    handleChangePrice(price)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault() }>
        <input
          type='text'
          placeholder='Bodega Sottano, Los Haroldos'
          className={styles.input}
        />
        <button className={styles.button}>Buscar</button>
      </form>

      <div className={styles.divisor}></div>

      {/* COMPONENTE?? */}
      <div style={{ display: 'flex', gap: '20px'}}>
        <label>Price: </label>
        <input
          id='min-input'
          type='range'
          min='0'
          max='30000'
          step='100'
          value={filterPrice}
          onChange={onHandleChangePrice}
          />
          <label>$ {filterPrice}</label>
      </div>

      <Wines wines={filteredWines} />
    </div>
  )
}
