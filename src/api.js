// src/api.js
const baseURL = 'https://api.edamam.com';
const appId = 'fa20cceb';
const appKey = 'aeaf54c5609260e08a1cd7e0d3cef7e8';
const resultsPerPage = 30

const fetchRecipes = async (searchQuery) => {
  console.log(searchQuery);
  const url = `${baseURL}/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&to=${resultsPerPage}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchRecipes;
