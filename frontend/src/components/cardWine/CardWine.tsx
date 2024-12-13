import { Link } from 'react-router-dom'
import { IWine } from '../../types'

import styles from './cardWine.module.css'
import { useDeleteWines } from '../../hooks/useDeleteWines'

export const CardWine: React.FC<IWine> = ({
  name,
  description,
  price,
  location,
  id
}) => {
  const { deleteWine, err, loading } = useDeleteWines()

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
        <h3>{name}</h3>

        <p>{description}</p>

        <div className={styles.locationText}>
          <img
            src='/location-icon.png'
            alt='Location Icon png'
            className={styles.locationIcon}
          />
          {location?.includes('https://maps') ? (
            <p className={styles.anchorLocation}>
              <a
                href={location}
                target='__blank'
              >
                Ver ubicación en Google Maps
              </a>
            </p>
          ) : location !== null ? (
            <p>{location}</p>
          ) : (
            <p>Sin ubicación</p>
          )}
        </div>

        <div className={styles.footerCard}>
          <p>${price}</p>

          <div className={styles.buttonContainer}>
            <Link to={'/:id'}>
              <button>Ver más</button>
            </Link>
            <button onClick={() => deleteWine(id)} className={styles.buttonDelete}>
              Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
