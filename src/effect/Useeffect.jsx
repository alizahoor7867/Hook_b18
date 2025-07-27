import React, { useEffect, useState } from 'react';

const Useeffect = () => {
    const [count,setcount]=useState(0)
    const handlecount =()=>{
        setcount(count+1);
    }
useEffect(() => {
  document.title = `${count} new messages`;
}, [count]);
 
  return (
    <div className="container text-center mx-auto">
      <h1 className="text-9xl">{count}</h1>
      <button onClick={handlecount}  className="p-2 rounded-md bg-green-500">
        Increment
      </button>
    </div>
  );
};

export default Useeffect;
