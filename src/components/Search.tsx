import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search: React.FC<{ searchHandler: (s: string) => void }> = props => {
  return (
    <div className='flex items-center bg-blue-100 rounded pr-2 shadow-sm'>
      <input
        type='text'
        className='w-full text-base px-3 py-1 outline-0 bg-transparent'
        placeholder='Search here...'
        onChange={e => props.searchHandler(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} color='#3b82f6' />
    </div>
  )
}

export default Search
