import React from 'react'
import { UseCounter } from '../hooks/useCounter'

function Counter() {
    const[num,inc,dec]=UseCounter(0);
  return (
    <div className='counter'>
        
    <div className="div">{num}</div>
    <button onClick={inc}>Inc</button>
    <button onClick={dec}>Dec</button>
    </div>
  )
}

export default Counter
