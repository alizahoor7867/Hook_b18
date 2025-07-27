import React, { useState } from 'react'
import Singlebday from './Singlebday'
import { data } from './bdays'

const BIirthday = () => {
  const [bdays, setbdays] = useState(data)

  const removedata = () => {
    if(bdays.length >0){
       setbdays([])

    }
    else
    {
      setbdays(data)
    }
   
  };
    const handleDelete = (id) => {
    setbdays(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="container mx-auto shadow-xl w-full xl:w-1/3 lg:w-[40%] md:w-[45%] p-10 rounded-md my-4 shadow-amber-400">
        <h2 className='text-center text-5xl bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent'>
          {bdays.length} birthday today
        </h2>

        {bdays.map((item, index) => (
          <Singlebday key={index} {...item} onDelete={handleDelete} />
        ))}

        <button onClick={removedata} className={`p-3  rounded-md w-full ${bdays.length ==0 ?'bg-green-700':'bg-gradient-to-r from-red-500 to-green-600'}`}>
         {bdays.length ==0 ?'Refresh all':'Remove all'}
        </button>
      </div>
    </>
  )
}

export default BIirthday
