import React from 'react'

const Card = ({currentRecipes}) => {
  
  return (
<div>
<div className='flex flex-wrap justify-center '>
    {currentRecipes.map((data, index) => (
      <div key={index} className='m-4 p-4 w-full md:w-3/12 bg-green-400 rounded-lg hover:opacity-50'>
        <img className='rounded-lg w-56 mx-auto' src={data?.recipe?.image} alt='food_img'/>
        <div className='mx-4 mt-12'>
          <h1 className='text-xl font-bold '>{data?.recipe?.label}</h1>
          <h1>Calories : {Math.floor(data?.recipe?.calories)}</h1>
          <p>cuisineType : {data?.recipe?.cuisineType}</p>
          <p>cuisineType : {data?.recipe?.mealType}</p>
        </div>
      </div>
    ))}
    </div>
</div>
  )
}

export default Card