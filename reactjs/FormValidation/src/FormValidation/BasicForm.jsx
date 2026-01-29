import React, { useState } from 'react'

const BasicForm = () => {
    const [name,setName]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello: ${name}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='emter your name' value={name} onChange={(e)=>setName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BasicForm
