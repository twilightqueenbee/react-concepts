import React from 'react'

const Tailwindcssconcept = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='w-screen h-auto flex flex-wrap gap-25 justify-evenly p-5'>
        {/* <h1 className='bg-[#016d01] text-blue-950  text-[100px]
        font-extrabold underline uppercase'>Tailwindcssconcept</h1>*/}

        {
          arr.map((ele, index) => {
            return (
              <div key={index} className='w-[300px] h-[300px] bg-gray-300 border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-400 cursor-pointer hover:bg-purple-300 hover:scale-105 transition-all duration-[1s] animate-pulse'>{ele}</div>
            )
          })
        }
    </div> 
  )
}

export default Tailwindcssconcept