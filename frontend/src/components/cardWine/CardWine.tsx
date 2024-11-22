import { Link } from 'react-router-dom'
import styles from './cardWine.module.css'

// interface Props {}
export function CardWine(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src='./wine-image.jpg'
          alt='An image of a wine'
          className={styles.img}
        />
      </div>

      <div className={styles.dataContainer}>
        <h3>Vall Major</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odio
          harum eum similique nam fugiat!
        </p>

        <div className={styles.locationText}>
          <img
            src='/location-icon.png'
            alt='Location Icon png'
            className={styles.locationIcon}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            culpa!
          </p>
        </div>

        <div className={styles.footerCard}>
          <p>$10.000</p>

          <div className={styles.buttonContainer}>
            <Link to={'/:id'}>
              <button>Ver más</button>
            </Link>
              <button>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
