import { Link } from 'react-router-dom'
import { IWine } from '../../types'
import { CardWine } from '../cardWine/CardWine'
import styles from './wines.module.css'

interface Props {
  wines: IWine[]
}

export const Wines: React.FC<Props> = ({ wines }) => {
  return (
    <div className={styles.container}>
      {wines.length > 0 ? (
        wines.map((wine) => (
          <CardWine
            key={wine.id}
            {...wine}
          />
        ))
      ) : (
        <>
          <p>There is no wines to show</p>
          <Link to={'/add-wine'}>
            <button className={styles.addWineButton}>+</button>
          </Link>
        </>
      )}
    </div>
  )
}
