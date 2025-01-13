import { useState } from 'react'
import { useAppSelector } from './userState.hook'
import { IWine } from '../types'

interface UseFiltersReturn {
  filteredWines: IWine[]
  filterPrice: number
  handleChangePrice: (newPrice: number) => void
}

export default function useFilters(): UseFiltersReturn {
  const wines = useAppSelector((state) => state.user.wines)
  const [filterPrice, setFilterPrice] = useState<number>(0)

  const handleChangePrice = (newPrice: number) => {
    setFilterPrice(newPrice)
  }

  const filterWines = (wines: IWine[]) => {
    return wines.filter( wine => wine.price && wine.price >= filterPrice )
  }

  const filteredWines = filterWines(wines)

  return {
    filterPrice,
    filteredWines,
    handleChangePrice
  }
}
