import React, { useState } from 'react'

const ControlledForm = () => {
    const [inputValue, setInputValue]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Input Value: ${inputValue}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name' onChange={(e)=>setInputValue(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
