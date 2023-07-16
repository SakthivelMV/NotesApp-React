import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import Lists from "./Components/Lists"
import Search from "./Components/Search";
import Header from "./Components/Header";



function App(){
  const[notes,setNotes]=useState([
    {
      id:nanoid(),
      text:'First',
      date:'15-07-23'
    },
    {
      id:nanoid(),
      text:'sec Note',
      date:'15-07-23'
    },
    {
      id:nanoid(),
      text:'third Note',
      date:'15-07-23'
    },
  ]);

  // Search
  const[SearchTxt,setSearchTxt]=useState('');
  

  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('app-data')
      );
if(savedNotes){
  setNotes(savedNotes);
}
  },[]);

  // Local Storage Save
  useEffect(()=>{
    localStorage.setItem('app-data',JSON.stringify(notes))
  },[notes]);

  // Adding notes
  const addnotes = (text)=>{
    const date = new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };

  // Delete 

  const delNote = (id)=>{
    const newNotes = notes.filter((note)=>note.id!==id);
    setNotes(newNotes);

  }
// 
  return(
    <div className="container" >
      <Header/>
      <Search handleSearch = {setSearchTxt}/>
      <Lists notes={notes.filter((note)=>note.text.toLowerCase().includes(SearchTxt))} 
      handleAddNotes={addnotes} handleDelte={delNote}/>
    </div>
  )
}
export default App