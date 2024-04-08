
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Edit from './Edit';
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
function User() {
    const [employees, setEmployees] = useState([]);
    

    useEffect(() => {
        axios.get(`https://localhost:7205/api/User`)
            .then(res => {
                // const persons = res.data;
                setEmployees(res.data);
                console.log("Persons :" + setEmployees);
                // var FinalData = JSON.stringify(persons);
                //console.log("Data:" + dataArray);
            });
    }, []);


   
    const handleDelete = (id) => {
        // Make a DELETE request to the API endpoint
        axios.delete(`https://localhost:7205/api/User/${id}`)
            .then((response) => {
                console.log(response.status, response.data);
                setEmployees(employees.filter(emp => emp.id !== id));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
   
    return (
        <div className='myclass'>
        <h2> Users List</h2>
            <table>
                <thead>
                    <tr>
                        <th className="th-spacing">Id</th>
                        <th >Name</th>
                        <th  >lastname</th>
                        <th >department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.departement}</td>
                            <td><button onClick={() => handleDelete(emp.id)}><MdOutlineAutoDelete /></button></td>
                            <Link to={`/Edit/${emp.id}`}><button><FaUserEdit /></button></Link>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button ><a href="/Login"> <IoIosPersonAdd />AddUser</a></button>
            
            <div>
            </div>
        </div>



    );
}
export default User;