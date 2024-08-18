// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext'; // Correctly import UserContext

function UserDetails() {
  const { userData } = useContext(UserContext); // Use context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;