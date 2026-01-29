import React, {useState,useMemo} from 'react'

const UseMemoExe = () => {
    const [count,setCount]=useState(0);
    const [other,setOther]=useState(0);
    //simulate a heavy computation
    const expensiveValue=useMemo(()=>{
        console.log('Calculating...');
        return count*2;
    },[count]);//useMemo-it will memorizes the value
  return (
    <div>
      <h2>UseMemo Example</h2>
      <p>Count:{count}</p>
      <p>Other:{other}</p>
      <p>Expensive Value (count 2):{expensiveValue}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <button onClick={()=>setOther(other+1)}>Change Other State</button>
    </div>
  );
}

export default UseMemoExe
