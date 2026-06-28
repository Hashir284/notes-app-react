import React, { useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'


const Section2 = () => {
  
  const [editIndex, setEditIndex] = useState(null)
const [allNotes, setAllNotes] = useState(() => {
try {
    return JSON.parse(localStorage.getItem("All Notes")) || [];
  } catch {
    return [];
  }
}
);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(()=>{  
      localStorage.setItem('All Notes', JSON.stringify(allNotes))
  }, [allNotes])

  // useEffect(()=>{  
  //   console.log(allNotes);        
  //   if(allNotes.length>0){
  //     localStorage.setItem('All Notes', JSON.stringify(allNotes))
  //   }
  // }, [allNotes])
  // useEffect(()=>{
  //   let localStorageGetEachNotes = localStorage.getItem('All Notes')
  //   if (localStorageGetEachNotes) {
  //     setAllNotes(JSON.parse(localStorageGetEachNotes))
  // }
  // }, [])
  
  const del = (i) =>{
    setAllNotes(allNotes.filter((e, index)=> index != i)) 
  }

  
  const edit = (i) =>{
    setTitle(allNotes[i].title)
    setDescription(allNotes[i].description)
    setEditIndex(i)
  }

  return (
    <section className='flex items-start justify-center md:flex-nowrap flex-wrap px-14 pt-2 gap-9 w-full'>
             <Left allNotes={allNotes} setAllNotes={setAllNotes} title={title} setTitle={setTitle} description={description} setDescription={setDescription} setEditIndex={setEditIndex} editIndex={editIndex}/>
      <Right allNotes={allNotes} del={del} edit={edit}/>

    </section>
  )
}

export default Section2
