import React from 'react'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const UserProfile = () => {
    const {userId}=useParams();
    const [user,setUser]=useState(null);
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email:{user.email}</p>
    </div>
  )
}

export default UserProfile
