import React, { useState } from 'react'

const Usestate = () => {
  const [name,setname] =useState("this is first tittle");
  const changeTittle=()=>{
    if(name=='this is first tittle'){

      setname("this is second")      
    }
    else
    {
          setname("this is first tittle")


    }



  }
  


  return (
    <>
    <div className="container mx-auto text-center">
    <h1 className='text-center text-4xl bg-gradient-to-l from-red-600 to to-blue-800 w-max  items-center mx-auto my-2 bg-clip-text text-transparent '>{name}</h1>
    </div>
    <button onClick={changeTittle} className='p-2 bg-amber-300 mx-auto text-center rounded-full flex hover:bg-amber-800 hover:scale-105 hover:shadow-xl transition-all'>Click Me </button>
    </>

  )
}

export default Usestate