
import React from 'react';

const UserRow = ({ user }) => {
  const { userId, loginName, firstName, lastName } = user;

  const editUrl = `/editUser/${userId}`;
  const moduleRightUrl = `/userModuleRight/${userId}`;

  return (
    <tr>
      <td>{loginName}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <a className="edit" href={editUrl}><i className="fa fa-pencil-square-o" aria-hidden="true" title="Edit"></i></a>
        <a className="delete" href={moduleRightUrl}><i className="fa fa-lock" aria-hidden="true" title="Set module right"></i></a>
      </td>
    </tr>
  );
};

export default UserRow;
