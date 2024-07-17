// UsersListTable.js

import React from 'react';
import UserRow from './UserRow';

const UsersListTable = ({ users }) => {
  return (
    <table className="table table-condensed table-striped table-hover">
      <thead style={{ backgroundColor: 'lightgray' }}>
        <tr>
          <th style={{ width: '100px' }}>Login Name</th>
          <th style={{ width: '100px' }}>First Name</th>
          <th style={{ width: '100px' }}>Last Name</th>
          <th style={{ width: '20px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.userId} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersListTable;
