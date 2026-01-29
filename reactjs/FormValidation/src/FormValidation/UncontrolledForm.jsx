import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const inputRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Value: ${inputRef.current.value}`);
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder='enter value' />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default UncontrolledForm
