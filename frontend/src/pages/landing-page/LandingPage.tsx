import styles from './langingPage.module.css'
// interface Props {}

export function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Bienvenid@ a WineApp</h1>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <p className={styles.text}>
            ¿Probaste un vino que te encantó, pero olvidaste su nombre o dónde
            lo conseguiste? Con WineApp, puedes registrar y recordar esos
            sabores únicos cada vez que lo necesites.
          </p>
        </div>
        <div className={styles.rigth}>
          <img
            src='/wine-gif.gif'
            alt='Wine Gif'
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}
