import React, { useCallback, useState } from 'react'
const Button=({onClick,label})=>{
console.log('Render button:',label);
return <button onclick={onClick}>{label}</button>;
}
const UseCallbackExe = () => {
    const [count,setCount]=useState(0);
    const increment=useCallback(()=>{
        setCount(c=>c+1);
    },[]);
  return (
    <div>
      <h2>UseCallback Example</h2>
      <p>Count:{count}</p>
      <Button onClick={increment} label="Increment Count"/>
    </div>
  )
}

export default UseCallbackExe
