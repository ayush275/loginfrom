
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
function User() {

 const [employees, setEmployees] = useState([]);
 const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        axios.get(`https://localhost:7205/api/User`)
            .then(res => {
                // const persons = res.data;
                toast.info("WelCome This Page",{
                    position:"top-center",
                    autoClose:2000
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
                console.error("Error:", error);
                
            });
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);

    }; 
    return (
        <div className='myclass'>
        <h2> Users List</h2>
        {errorMessage && <h2 className='mes'>{errorMessage}</h2>}
        <ToastContainer/>
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
                            <td><Link to={`/Edit/${emp.id}`}><button><FaUserEdit /></button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button ><a href="/Login"><IoMdArrowRoundBack /> Back</a></button> 
            <div>
            </div>
        </div>



    );
}
export default User;