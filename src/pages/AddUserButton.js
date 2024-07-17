// AddUserButton.js
import React from 'react';
import NewUserForm from './addUser';
const AddUserButton = () => {
  return (
    <p style={{ paddingTop: '10px' }}>
      <a href="./addUser" className="btn btn-primary">
        <i className="fa fa-plus-circle"></i><span> New User</span>
      </a>
    </p>
  );
};

export default AddUserButton;
