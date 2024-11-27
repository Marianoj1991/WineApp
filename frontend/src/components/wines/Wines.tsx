import { IWine } from '../../types'
import { CardWine } from '../cardWine/CardWine'
import styles from './wines.module.css'


interface Props {
  wines: IWine[]
}

export const Wines: React.FC<Props> = ({ wines }) => {
  return (
    <div className={styles.container}>

      {
        wines.map((wine) => (
          <CardWine key={wine.id} {...wine} />
        ))
      }

    </div>
  )
}