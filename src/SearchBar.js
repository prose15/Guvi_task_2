import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = ({value,setValue,handleSearch,IsSearch,setIsSeacrh}) => {
  return (
    <div>
     {IsSearch &&
    <div className='flex justify-center m-4 p-4'>
      <input type='text' 
      className='border border-green-400 p-4 my-4 rounded-md w-1/2' 
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
      <div onClick={()=>{setIsSeacrh(!IsSearch)}}>
      <button className=' mx-1 text-white bg-green-400 p-4 my-4 rounded-md flex' onClick={handleSearch}>
        <IoIosSearch size={20} className='mt-1 mx-2'/>
        <p>Search</p>
      </button>
      </div>
    </div>
    }
    </div>
  )
}

export default SearchBar