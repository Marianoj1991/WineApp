import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'

import styles from './App.module.css'

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}

export default App
