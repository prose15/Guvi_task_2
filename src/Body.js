import React, { useEffect, useState } from 'react'
import fetchRecipes from './api';
import Shimmer from './Shimmer';
import { useDispatch} from 'react-redux';
import { addApi} from './store/apiSlice';
import { IoFunnelSharp } from "react-icons/io5";
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Body = ({IsSearch,setIsSeacrh}) => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const [value,setValue] = useState('south indian')
    const [filterValue,setFilterValue] = useState()
    const [filteredData,setFilterData] = useState()
    const recipesPerPage = 5;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchRecipes(value);
          setRecipes(data);
          setFilterData(data)
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
    if(!recipes) return
    const handleSearch = async() => {
    const data = await fetchRecipes(value);
    setRecipes(data);
    setFilterData(data)
    };
    const handleFilter = () =>{
      const filteredRecipe = filteredData.filter((data) => (data?.recipe?.label.toLowerCase().includes(filterValue.toLowerCase())))
      setRecipes(filteredRecipe)
      setFilterValue('')
     }
   
    dispatch(addApi(recipes))
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const npage = Math.ceil(recipes.length/recipesPerPage)
  const numbers = [...Array(npage+1).keys()].slice(1)
  const prePage = () =>{
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
   }
   const changePage = (id) =>{
    setCurrentPage(id)
   }
   const nextPage = () =>{
    if(currentPage !== npage){
      setCurrentPage(currentPage+1)
    }
   }
  
   return recipes.length === 0 ? (<Shimmer/>)  : ( 
   <div>
  <SearchBar value={value} setValue={setValue} handleSearch={handleSearch} IsSearch={IsSearch} setIsSeacrh={setIsSeacrh}/>
    <div className='flex justify-center'>
      <input type='type' 
      value={filterValue}
      onChange={(e)=>setFilterValue(e.target.value)}
      className='border border-green-400 p-4 my-4 rounded-md w-1/2' />
      <button className=' mx-1 text-white bg-green-400 p-4 my-4 rounded-md flex' onClick={handleFilter}><IoFunnelSharp size={20} className='mt-1 mx-2'/>Filter</button>
    </div>
    <Card currentRecipes={currentRecipes}/>
    <Pagination prePage={prePage} nextPage={nextPage} changePage={changePage} numbers={numbers} currentPage={currentPage}/>
  </div>
  )
}

export default Body