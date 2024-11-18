import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import { NavBar } from './components/navbar/NavBar'

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
