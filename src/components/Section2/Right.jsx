import React from "react";
import Notes from "./Notes";
const Right = ({allNotes, del, edit}) => {
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center justify-center">
          <img className="mr-2" src="notes2.png" alt="" width={"20px"} />
          <h3 className="font-bold text-2xl">Your Notes</h3>
        </div>
        <div className="cursor-pointer mr-6 rounded-2xl bg-black text-white px-4 py-1">{allNotes.length} note</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {
          allNotes.map((e, i)=>{
            return <Notes key={i} title={e.title} description={e.description} i={i} del={del} edit={edit} date={e.date}/>
          })
        }
      </div>
    </div>
  );
};

export default Right;
