import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';


const App = () => {
const [IsSearch,setIsSeacrh] = useState(false)
  return (
    <div>
      <Header IsSearch = {IsSearch} setIsSeacrh={setIsSeacrh}/>
      <Body IsSearch={IsSearch} setIsSeacrh={setIsSeacrh}/>
    </div>
  );
};

export default App;
