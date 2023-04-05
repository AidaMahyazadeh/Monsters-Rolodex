/* eslint-disable no-unused-vars */


import { useState,useEffect } from 'react';
import './App.css';
import SearchBox from './Components/search-box/SearchBox.js';
import CardList from './Components/card-list/CardList';


function App() {
  let [searchField,setSearchField]=useState('');
  let [monsters,setMonsters]=useState([]);
  let [filteredMonsters,setFilteredMonsters]=useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[])
   useEffect(()=>{
    const newFilteredMonsters= monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters)
   },[monsters,searchField])
  
  function onSearchChange(event){
 const searchFieldString=event.target.value.toLocaleLowerCase();
 setSearchField(searchFieldString)
  }
  
  return (
    <div className="App">
      <h1 className="app-title">Monster Relodex</h1>
     <SearchBox 
      type="search"
      className="monsters-search-box"
      placeholder="search monster"
      onChangeHandler={onSearchChange}
     />
     <CardList monsters={filteredMonsters}/>
    </div>
  );

}


export default App;
