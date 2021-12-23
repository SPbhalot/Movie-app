import './App.css';
import Home from './Component/Home'
import MoviePoster from './Component/MoviePoster'
import {useState,useEffect} from 'react'
import axios from 'axios';  


function App() {
  const [search,setSearch]=useState("indian");
  const [iteam,setIteam]=useState()
   const UserInput=(e)=>{
       setSearch(e.target.value);
   }
useEffect(()=>{   
axios.get(`https://omdbapi.com/?t=${search}&apikey=5bdcd06e`)  
.then(res => {  
  const result = res.data;  
 setIteam(result)
 console.log(result)
})
console.log("bhai badiya")

},[search])

  return (
    <div className="App">
    
     <Home UserInput={UserInput}
      ></Home>
      {
        iteam?<MoviePoster iteam={iteam}></MoviePoster>:null
      }
  
     
     <div className='container'>
     </div>
    
    </div>
  );
}

export default App;
