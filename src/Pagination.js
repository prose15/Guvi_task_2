import React from 'react'

const Pagination = ({prePage,nextPage,changePage,numbers,currentPage}) => {
  
  return (
    <div>
        <div className='flex justify-center '>
      <ul className='bg-green-200 my-4 p-4 max-sm:mx-2'>
        <li>
          <button onClick={prePage}>
            Prev
          </button>
        </li>
        </ul>
        <ul className='hidden md:flex'>
        {
          numbers.map((num,index)=>
            <li key={index}>
              <button onClick={()=>{
                changePage(num)}} className={currentPage===num ?'p-4 my-4 mx-1 bg-green-200 ' :'p-4 my-4 mx-1 border-2 border-green-200 '} >{num}</button>
            </li>
          )
        }
      </ul>
      <ul>
      <li className ='bg-green-200 my-4 p-4' >
          <button onClick={nextPage}>
           NextPage
          </button>
        </li>
        </ul>
    </div>
    </div>
  )
}

export default Pagination