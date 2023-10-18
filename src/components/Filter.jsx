/* eslint-disable react/react-in-jsx-scope */
import { useId } from 'react'
import { useFilters } from '../Hooks/useFilters'

export function Filters () {
  const { setFilters } = useFilters()

  const categoryFilterId = useId()

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>

  )
}
