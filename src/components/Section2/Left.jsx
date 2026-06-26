import React from 'react'

const Left = () => {
  return (
    <div className='p-10 rounded-3xl max-w-md w-full' id='collectData'>
      <div className='flex items-center mb-4'>
        <img className='mr-2' src="pencil.png" alt="" width='25px'/>
        <h2 className='font-bold text-2xl'>Create Your Note</h2>
      </div>

      <div className='flex flex-col items-start mb-5'>
        <label htmlFor="" className='font-semibold mb-1'>
            Title
        </label>
        <input className='rounded-2xl px-4 py-3 w-full' type="text" name="" id="" placeholder='e.g., Meeting notes, Project ideas, Daily tasks...'/>
      </div>

      <div className='mb-6'>
        <label htmlFor="" className='flex items-start font-semibold mb-1'>
            <img className='mr-1' src="sheet.png" alt="" width='20px'/>Content
        </label>
    <textarea className='rounded-2xl px-4 py-3 w-full' name="" id="" placeholder='Start writing your note here...' cols={30} rows={5}></textarea>
      </div>

      <div className='flex w-full justify-center'>
        <button className='flex w-52 justify-center items-center py-3 text-white bg-black rounded-3xl px-3 '>
        <img className='mr-1 h-4' src="add.png" alt="" width={'10px'} />
        Add Note
      </button>
      </div>
    </div>
  )
}

export default Left
