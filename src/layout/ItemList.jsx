import Item from '../components/Item'
import { useState } from 'react'
import { antiguedades as initialItems } from '../data/objetos'
import './ItemList.css'
const ItemList = () => {
  const [items] = useState(initialItems)
  const [filters, setFilters] = useState({ category: 'all' })

  const filterItems = (items) => {
    return items.filter((item) => {
      return (
        filters.category === 'all' || item.category === filters.category
      )
    }
    )
  }
  const filteredItems = filterItems(items)
  return (
    <>
        <Item items={filteredItems}/>
    </>
  )
}

export default ItemList
