import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export function NavBar(): JSX.Element {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.leftSide}>
        <Link to={'/home'}>
          <img
            className={styles.imgLogo}
            src='/wineAppLogoWhite.png'
            alt='WineApp Logo'
          />
        </Link>
      </div>
      <div className={styles.rigthSide}>
        <button className={styles.buttonLogin}>Ingresá</button>
        <button className={styles.buttonRegister}>Registrate</button>
        <label className={styles.label}>
          <input
            type='checkbox'
            className={styles.checkbox}
          />
          <img
            src='menu.png'
            alt='Menu hamburguesa icon'
            className={styles.iconMenu}
          />
        </label>
      </div>
    </div>
  )
}
