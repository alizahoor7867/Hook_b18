import React, { useState } from 'react'
import { use } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleclick=(e)=>{
    let text= e.target.innerHTML;
    if(text =='Decrease'){
     
      setCount(count -1);
         if(count<=0){
          setCount(0)
        
      }
    }
    else if (text =='Reset'){

    
      setCount(0);
    }
    else
    {
            setCount(count +1);

    }
   


  }
  return (
    <>
<div className="container mx-auto text-center p-5 shadow-xl w-full md:w-1/3 xl:w-1/4">
  <h1 className={`${count>10 ?'bg-gradient-to-r from-red-600 to-yellow-600':'bg-red-800'} text-7xl text-center w-max mx-auto bg-clip-text text-transparent animate-bounce`}>
    {count}
  </h1>

  <div className="flex gap-3 items-center justify-center py-4">
    <button onClick={handleclick
} className="py-2 px-4 rounded-full bg-gradient-to-r from-red-600 to-green-500 font-semibold text-white hover:text-yellow-500 cursor-grab ">
      Decrease
    </button>
    <button  onClick={handleclick} className="py-2 px-4 rounded-full text-yellow-500 outline outline-yellow-500 font-semibold hover:bg-yellow-600  hover:text-white">
      Reset
    </button>
    <button onClick={handleclick} className="py-2 px-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 font-semibold text-white hover:text-green-500">
      Increase
    </button>
  </div>
</div>

    </> 
  )
}
