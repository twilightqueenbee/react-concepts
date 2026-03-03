import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const expensiveCalculation = useMemo(() => {
          let sum =0;
          for(let i = 1; i <= 1000000000; i++)
          {
            sum += i;
          }
          return sum;
    }, []);
    console.log(expensiveCalculation);
       
  return (
    <><div>UseMemoHook</div>
    <h1 className='text-6xl'>{count}</h1>
    <button className=' p-3 bg-blue-500 text-white cursor-pointer' onClick={() => setCount(count + 1)}>Update</button></>
  )
}

export default UseMemoHook
// useMemo is a hook that allows us to memorize a value so that it is only recalculated when its dependencies change. It is useful for optimizing performance by avoiding expensive calculations on every render.
//useMemo wil allways return a value, it will return the memorized value if the dependencies have not changed, otherwise it will return the new value.

