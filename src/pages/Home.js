// UsersListContainer.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import UsersListTable from './UserListTable';
import AddUserButton from './AddUserButton';
const UsersListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from API or any source
    fetchUsers(); // Implement fetchUsers function to get data
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users'); // Replace with your API endpoint
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="grid-container">
      <div className="grid-table-wrapper">
        <div className="grid-title" style={{ backgroundColor: 'rgb(55,65,81)' }}>
          <div className="grid-row">
            <div className="col-sm-6">
              <h2>Users</h2>
            </div>
            <div className="col-sm-6">&nbsp;</div>
          </div>
        </div>
         <UsersListTable users={users} />
        <AddUserButton /> 
      </div>
    </div>
  );
};

export default UsersListContainer;
