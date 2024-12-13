import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/userState.hook'
import { logout } from '../../redux/user-store/user.slice'

import styles from './navbar.module.css'

export function NavBar(): JSX.Element {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [ destination, setDestination ] = useState<string>('/')


  useEffect (() => {
    setDestination(!user.email ? '/' : '/home')
  }, [user])

  const handleLogout = () => {
    dispatch(logout())
    setIsOpen(false)
    navigate('/')
  } 

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

      {!user.email ? (
        <div className={styles.rigthSide}>
          <Link to={'/login'}>
            <button className={styles.buttonLogin}>Login</button>
          </Link>
          <Link to={'/register'}>
            <button className={styles.buttonRegister}>SingUp</button>
          </Link>
        </div>
      ) : (
        <div className={styles.rigthSide}>
          <Link to={'/add-wine'}>
            <button className={styles.addWineButton}>+</button>
          </Link>
          <button
            onClick={handleLogout}
            className={styles.buttonRegister}
          >
            Logout
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
        (!user.email ? (
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
                Login
              </button>
            </Link>
            <Link to={'register'}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={styles.buttonRegister}
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div
            className={`${styles.rigthSideResponsive} ${
              isOpen ? styles.active : ''
            }`}
          >
            <Link to={'/add-wine'}>
              <button className={styles.addWineButton}>+</button>
            </Link>
            <button
              onClick={handleLogout}
              className={styles.buttonRegister}
            >
              Logout
            </button>
          </div>
        ))}
    </div>
  )
}
