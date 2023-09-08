import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const Profileadmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('http://localhost:4444/api/allusers') // Adjust the API endpoint
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Function to ban a user
  const banUser = (userId) => {
    axios.put('http://localhost:4444/api/users/:userId/ban', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      // Handle success, update the UI or show a message
      // You may also consider updating the local user list to reflect the ban.
    })
    .catch((error) => {
      // Handle error, show an error message
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th>Action</th> {/* Add an action column */}
          </tr>
        </thead>
        <tbody>
  {users.map((user) => (
    <tr key={user._id}>
      <td>{user.email}</td>
      <td>{user.type}</td>
      <td>
        {user.type !== 'admin' && (
          <button onClick={() => banUser(user._id)}>Ban</button>
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default Profileadmin;
