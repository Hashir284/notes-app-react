import React, { useState } from 'react'

const Left = ({allNotes, setAllNotes, title, setTitle, description, setDescription, editIndex, setEditIndex}) => {

  const createNotes = (e) =>{
    e.preventDefault()
    if(editIndex === null){
      setAllNotes(prev=>[...prev, {title, description}])
    }else{
      setAllNotes(allNotes.map((e,i)=>{
        if((editIndex) != i){
          return e
        }else{
          return {title, description}
        }
      }
    )
  )
    }

    setEditIndex(null)
  }

  return (
    <form className='p-10 rounded-3xl max-w-md w-full' id='collectData' onSubmit={createNotes}>
      <div className='flex items-center mb-4'>
        <img className='mr-2' src="pencil.png" alt="" width='25px'/>
        <h2 className='font-bold text-2xl'>Create Your Note</h2>
      </div>

      <div className='flex flex-col items-start mb-5'>
        <label htmlFor="" className='font-semibold mb-1'>
            Title
        </label>
        <input required value={title} className='rounded-2xl px-4 py-3 w-full' type="text" name="" id="" placeholder='e.g., Meeting notes, Project ideas, Daily tasks...' onChange={e=> setTitle(e.target.value)}/>
      </div>

      <div className='mb-6'>
        <label htmlFor="" className='flex items-start font-semibold mb-1'>
            <img className='mr-1' src="sheet.png" alt="" width='20px'/>Content
        </label>
    <textarea required value={description} className='rounded-2xl px-4 py-3 w-full' name="" id="" placeholder='Start writing your note here...' cols={30} rows={5} onChange={e=> setDescription(e.target.value)}></textarea>
      </div>

      <div className='flex w-full justify-center gap-7 px-3'>
        {editIndex === null ? 
        (<button className='flex w-52 justify-center items-center py-3 text-white bg-black rounded-3xl px-3 ' type='submit'>
        <img className='mr-1 h-4' src="add.png" alt="" width={'10px'} />
        Add Note
      </button>)
      :
      <><button className='flex w-44 justify-center items-center py-3 text-white bg-black rounded-3xl px-3 ' type='submit'>
        {/* <img className='mr-1 h-4' src="add.png" alt="" width={'10px'} /> */}
        Edit Note
      </button>
      <button onClick={()=>{
        setEditIndex(null)
        setTitle('')
        setDescription('')
      }} className='flex w-44 justify-center items-center py-3 text-white bg-black rounded-3xl px-3 ' type='submit'>
        {/* <img className='mr-1 h-4' src="add.png" alt="" width={'10px'} /> */}
        Cancel Edit
      </button></>
        }
      </div>
    </form>
  )
}

export default Left
