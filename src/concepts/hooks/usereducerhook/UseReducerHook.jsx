import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer = (state, action) => {
          // console.log(action);
          // console.log(state);
          // return 20

            switch (action) {
                case "INCRE":
                  return state + 1;
                  break;
                case "DECRE":
                  return state - 1;
                  break;
                case "RESET":
                  return 0;
                  break;
                default:
                  return state;
            }
    }

    const [count, dispatch] = useReducer(reducer, 0) 
    console.log(count);
    
  return (
    <div>
      <h1 className='text-2xl'>{count}</h1>
      <button className= 'border' onClick={() => dispatch("INCRE")}>Increment</button>
      <button className= 'border' onClick={() => dispatch("DECRE")}>Decrement</button>
      <button className= 'border' onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  )
}

export default UseReducerHook

// useReducer is a hook that is used for state management in React. It is an alternative to useState and is useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. The useReducer hook takes a reducer function and an initial state as arguments and returns an array with the current state and a dispatch function to update the state.
// In the above code, we define a reducer function that takes a payload and returns a new state. The useReducer hook is called with the reducer function and an initial state of 0. The current state is stored in the count variable, and the dispatch function is used to update the state when the button is clicked. When the button is clicked, it dispatches the string "data" to the reducer, which logs it and returns 20 as the new state.   
// When the button is clicked, the count will be updated to 20, and the new state will be logged to the console.
// In summary, useReducer is a powerful hook for managing complex state logic in React applications, and it provides a way to handle state updates in a more predictable and organized manner.
// if the dispatch fucntion is not caled then the state will not be updated and it will remain the same as the initial state. In this case, if the dispatch function is not called, the count will remain 0 and the new state will not be logged to the console.
