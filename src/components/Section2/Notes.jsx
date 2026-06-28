import React, { useState } from 'react'

const Notes = ({title, description, date, i, del, edit}) => {
  
  const getTimeAgo = () => {
  const now = Date.now();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (seconds < 60)
    { return "Just now";}
  if (minutes < 60){ return `${minutes} min ago`;}
  if (hours < 24){ return `${hours} hour${hours > 1 ? "s" : ""} ago`;}
  if (days === 1){ return "Yesterday";}
  else{ return `${days} days ago`;}
}
  const [formatedTime, setFormatedTime] = useState(getTimeAgo())
  


  return (
    <div className='px-7 py-4 rounded-3xl w-full' id='eachNotes'>
      <h4 className='font-bold text-xl mb-4'>{title}</h4>
      <p className='mb-4 text-sm'>{description}</p>
      <p className='mb-4 text-xs flex items-center text-stone-400'><img className='mr-1' src="clock.png" alt="" width={'11px'}/>{formatedTime}</p>

      <div className='mt-5 gap-6 lg:gap-3 xl:gap-6 flex'>
        <button onClick={()=>{
          edit(i)
        }} id='edit' className='flex-1 flex justify-center items-center py-2 px-3 text-sm  font-semibold bg-green-700 text-white rounded-2xl'>
                  <img className='mr-1 h-5' src="edit.png" alt="" width={'14px'}/>Edit</button>
        <button onClick={()=>{
          del(i)
        }} id='delete' className='flex-1  flex justify-center items-center  py-2 px-3 text-sm  font-semibold bg-red-700 text-white rounded-2xl'>
        <img className='mr-1 h-5' src="trash.png" alt="" width={'14px'}/>Delete</button>
      </div>
    </div>
  )
}

export default Notes
