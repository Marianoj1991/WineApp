import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import { useState } from 'react'

export function NavBar(): JSX.Element {

  const [isOpen, setIsOpen] = useState(false)

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
        <Link to={'/login'}>
          <button className={styles.buttonLogin}>Ingresá</button>
        </Link>
        <Link to={'/register'}>
          <button className={styles.buttonRegister}>Registrate</button>
        </Link>
      </div>

      <img
        src='/menu.png'
          width={40}
          height={40}
          onClick={() => setIsOpen((prev) => !prev)}
          alt='Icon menu burguer'
        className={styles.menuButton}
      />
        {isOpen && (
          <div className={styles.rigthSideResponsive}>
            <Link to={'login'}>
              <button onClick={() => setIsOpen((prev) => !prev)} className={styles.buttonLogin}>Ingresá</button>
            </Link>
            <Link to={'register'}>
              <button onClick={() => setIsOpen((prev) => !prev)} className={styles.buttonRegister}>Registrate</button>
            </Link>
          </div>
        )}
    </div>
  )
}
