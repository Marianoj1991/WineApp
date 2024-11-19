import styles from './cardWine.module.css'

// interface Props {}
export function CardWine(): JSX.Element {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <img src="./wine-image.jpg" alt="An image of a wine" className={styles.img} />
      </div>

      <div className={styles.dataContainer}>
        <h3>Vall Major</h3>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur voluptatibus tempore accusantium error voluptatum ea ducimus! Harum, quos sequi!
        </p>

        <div className={styles.locationText}>
          <img src="/location-icon.png" alt="Location Icon png" className={styles.locationIcon} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eligendi.</p>
        </div>

        <p>$10.000</p>
      </div>

    </div>
  )
}

