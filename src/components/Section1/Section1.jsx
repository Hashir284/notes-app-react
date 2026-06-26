import React from "react";

const Section1 = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center gap-3">
        <img src="notes.png" alt="" width={'40px'}/>
        <h1 className="font-bold text-4xl">Notes App</h1>
      </div>
      <div className="mt-4 mb-9">
        <p className="text-center">
          Organize your thoughts effortlessly. All changes are saved
          automatically.
        </p>
      </div>
    </section>
  );
};

export default Section1;
