import { useEffect, useState } from 'react'
import { AddWineForm } from '../../components'
import styles from './editWinePage.module.css'
import { getWineById } from '../../services/wine/getWineById.service'
import { useParams } from 'react-router-dom'
import { IWine } from '../../types'

// interface Props {}
export function EditWinePage(): JSX.Element {

  const {id} = useParams()

  const [ wine, setWine ] = useState<IWine | null>(null)

  useEffect(() => {
    const getWine = async () => {
      let data = null
      try {
        
        if(id){ 
          data = await getWineById(+id)
          if(data) {
            setWine(data)
          } else {
            setWine(null)
          }
        }

      } catch (err){
        console.log(err)
      }
    }
    getWine()
  }, [])

   return (
     <div className={styles.container}>
       <AddWineForm wine={wine} />
     </div>
   )
}