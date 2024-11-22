import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './navbar.module.css'

export function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [user, setIsUser] = useState<boolean>(true)
  const [ destination, setDestination ] = useState<string>('/')

  useEffect (() => {
    setDestination(user ? '/home' : '/')
  }, [user])

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.leftSide}>
        <Link to={destination}>
          <img
            className={styles.imgLogo}
            src='/wineAppLogoWhite.png'
            alt='WineApp Logo'
          />
        </Link>
      </div>

      {!user ? (
        <div className={styles.rigthSide}>
          <Link to={'/login'}>
            <button className={styles.buttonLogin}>Ingresá</button>
          </Link>
          <Link to={'/register'}>
            <button className={styles.buttonRegister}>Registrate</button>
          </Link>
        </div>
      ) : (
        <div className={styles.rigthSide}>
          <button
            onClick={() => setIsUser((prev) => !prev)}
            className={styles.buttonRegister}
          >
            Cerra Sesión
          </button>
        </div>
      )}

      <img
        src='/menu.png'
        width={40}
        height={40}
        onClick={() => setIsOpen((prev) => !prev)}
        alt='Icon menu burguer'
        className={styles.menuButton}
      />
      {isOpen &&
        (!user ? (
          <div
            className={`${styles.rigthSideResponsive} ${
              isOpen ? styles.active : ''
            }`}
          >
            <Link to={'login'}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={styles.buttonLogin}
              >
                Ingresá
              </button>
            </Link>
            <Link to={'register'}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={styles.buttonRegister}
              >
                Registrate
              </button>
            </Link>
          </div>
        ) : (
          <div
            className={`${styles.rigthSideResponsive} ${
              isOpen ? styles.active : ''
            }`}
          >
            <button
              onClick={() => setIsUser((prev) => !prev)}
              className={styles.buttonRegister}
            >
              Cerra Sesión
            </button>
          </div>
        ))}
    </div>
  )
}
