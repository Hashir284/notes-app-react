import React from 'react'

const Notes = () => {
  return (
    <div className='px-7 py-4 rounded-3xl w-full' id='eachNotes'>
      <h4 className='font-bold text-xl mb-4'>Notes Title</h4>
      <p className='mb-4 text-sm'>Notes Description</p>
      <p className='mb-4 text-xs flex items-center text-stone-400'><img className='mr-1' src="clock.png" alt="" width={'11px'}/> 4 min ago</p>

      <div className='mt-5 gap-6 lg:gap-3 xl:gap-6 flex'>
        <button className='flex-1 py-2 px-3 text-sm  font-semibold bg-green-700 text-white rounded-2xl'>Edit</button>
        <button className='flex-1 py-2 px-3 text-sm  font-semibold bg-red-700 text-white rounded-2xl'>Delete</button>
      </div>
    </div>
  )
}

export default Notes
