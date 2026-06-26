import React from "react";
import Notes from "./Notes";
const Right = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center justify-center">
          <img className="mr-2" src="notes.png" alt="" width={"20px"} />
          <h3 className="font-bold text-2xl">Your Notes</h3>
        </div>
        <div className="cursor-pointer mr-6 rounded-2xl bg-black text-white px-4 py-1">1 note</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </div>
  );
};

export default Right;
