
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function User() {

 const [employees, setEmployees] = useState([]);
 const [errorMessage, setErrorMessage] = useState("");
 
    useEffect(() => {
        debugger;
        const Token = localStorage.getItem("token");

    if (Token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${Token}`;
    }
        axios.get(`https://localhost:7205/api/User`)
            .then(res => {
                // const persons = res.data;
                toast.info("WelCome This Page",{
                    position:"bottom-center",
                    autoClose:2000,
                    theme:"dark",
                });
                setEmployees(res.data);
                console.log("Persons :" + setEmployees);
                
            });
    }, []);

    const handleDelete = (id) => {
        // Make a DELETE request to the API endpoint
        axios.delete(`https://localhost:7205/api/User/${id}`)
            .then((response) => {
                console.log(response.status, response.data);
                setEmployees(employees.filter(emp => emp.id !== id));
                setErrorMessage("User Data Delete"); 
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setErrorMessage('Failed to fetch user data');
            });
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
    }; 
    return (

         <Container style={{ display:'flow'}}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign:'center'}}>
        <div className="table-responsive">
        <h2 > Users List</h2>
         {errorMessage && <h2 className='mes'>{errorMessage}</h2>}
         <ToastContainer/>
         {employees.length > 0 ? (
         <Table striped bordered hover size="sm"  style={{backgroundColor:'gray' ,border: '2px solid black', borderRadius:'3px'}}>
             <Row style={{backgroundColor:'cadetblue'}}> 
                 <thead>
                 <tr>
           <th style={{ paddingRight: '50px', }} >ID</th>
           <th style={{ paddingRight: '50px' }}>First Name</th>
           <th style={{ paddingRight: '50px' }}>Last Name</th>
           <th style={{ paddingRight: '50px' }}>Department </th>
           <th style={{ paddingRight: '50px' }}>Edit</th>
           <th>Delete</th>
           </tr>
              </thead>
                 <tbody style={{backgroundColor:'skyblue'}}>

                    {employees.map(emp => (
                        <tr key={emp.id} style={{ border: '1px solid black'}}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.lastname}</td>
                           <td>{emp.departement}</td>
                           <td><Link to={`/Edit/${emp.id}`}><button><FaUserEdit /></button></Link></td>
                           <td><button onClick={() => handleDelete(emp.id)}><MdOutlineAutoDelete /></button></td>
                            
                         </tr>
                     ))}
                 </tbody>
                 </Row>
             </Table>
             ) : (
           <div className="text-center">
              <p>No user data available.</p>
           </div>
            )}
            <br />
            <button ><a href="/Login"><IoMdArrowRoundBack/>Back</a></button> 
            <div>
            </div>
             </div>
             </div>
            
        </Container>

   





    );
}
export default User;