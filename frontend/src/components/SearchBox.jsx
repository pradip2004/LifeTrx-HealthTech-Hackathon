import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchBox() {
  return (
      <div className="flex items-center bg-gray-200 rounded-lg p-2 w-52 shadow-sm">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 mr-2" />
      <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 outline-none text-gray-700 w-full"
      />
</div>
  )
}

export default SearchBox