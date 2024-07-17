
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App';
function table() {
  return (
    <div className='myclass'>
    <Table striped bordered hover size="sm"  style={{backgroundColor:'gray' ,border: '3px solid black', borderRadius:'4px'}}>
      <thead >
        <tr  >
          <th style={{ paddingRight: '50px', }} >ID</th>
          <th style={{ paddingRight: '50px' }}>First Name</th>
          <th style={{ paddingRight: '50px' }}>Last Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:'skyblue'}}>
        <tr style={{ border: '1px solid black'}}>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}


export default table;