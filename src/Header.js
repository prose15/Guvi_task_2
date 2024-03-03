import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = ({IsSearch,setIsSeacrh}) => {
  return (
    <div className='shadow-lg bg-[#01DA96] flex justify-between py-4 px-16 mb-8'>
      <img 
      className='w-40'
      src='https://i.pinimg.com/originals/04/78/9c/04789c2172bb152875a9d242e9396fc9.png'
      alt='logo '/>
      <button className='m-8 flex hover:text-xl text-white' onClick={()=>setIsSeacrh(!IsSearch)}><IoIosSearch size={20} className='mt-1 mx-2'/><p>Search</p></button>
    </div>
  )
}

export default Header