import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import "../App";

const Edit = () => {
    const { id } = useParams();
    const [employees, setEmployees] = useState([]);
   
    useEffect(() => {
        axios.get(`https://localhost:7205/api/User/${id}`)
            .then(res => {
                // const persons = res.data;
                setEmployees([res.data]);
                console.log("Persons :" + setEmployees); 
            });
    }, []);

    
    const handleUpdate = () => {
        axios.post(`https://localhost:7205/api/User/${id}`, employees,)
                .then(response => {
                    console.log("User updated successfully:", response.data);
                   // Refresh user list after update
               })
               .catch(error => {
                   console.error("Error updating user:", error);
               });
        
    };


    return (

        <div className='myclass'>
            <h1  > Edit Employee Details</h1>
            <table>
               
                <tbody>
                
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <label className='label' >ID:</label>
                            <input type="text" name="id" value={id} disabled />
                            
                            <br />
                            <label className='label'>Name:</label>
                            <input type="text" name="name" value={emp.name}  />
                            <br />
                            <label className='label'>Lastname:</label>
                            <input type="text" name="lastname" value={emp.lastname}   />
                            <br />
                            <label className='label'>Department:</label>
                            <input type="text" name="departement" value={emp.departement}  />
                            <br />
                            <br />
                            <div className='btn'>
                                <button onClick={handleUpdate}>Update</button>
                            </div>
                        </tr>
                         

                    ))}

                 
                                  
                </tbody>
            </table>
            

            <div>
            </div>
        </div>



    );
}

















//    const [editedUser, setEditedUser] = useState({
//        Id: "",
//        name: "",
//        lastname: "",
//        departement: ""
//    });

//    //useEffect(() => {
//    //    fetchUserList();
//    //    console.log("fetch${id}");
//    //}, []);
//    useEffect(() => {
//        axios.get(`https://localhost:7205/api/User/${id}`)
//            .then(res => {
//                // const persons = res.data;
//                setUsers(res.data);
//                console.log("Persons :" + set);
//                // var FinalData = JSON.stringify(persons);
//                //console.log("Data:" + dataArray);
//            });
//    }, []);
//    const handleEdit = (user) => {
//        setEditedUser(user);
//    };

//    const handleUpdate = () => {
//        axios.put(`https://localhost:7205/api/User/${id}`, editedUser)
//            .then(response => {
//                console.log("User updated successfully:", response.data);
//               // Refresh user list after update
//            })
//            .catch(error => {
//                console.error("Error updating user:", error);
//            });
//    };

//    const handleChange = (e) => {
//        setEditedUser({
//            ...editedUser,
//            [e.target.name]: e.target.value
//        });
//    };

//    return (
//        <div>
//            <h2>Edit User List</h2>
//            <ul>
//                {users.map(user => (
//                    <li key={user.Id}>
//                        <div>ID: {user.Id}</div>
//                        <div>Name: {user.name}</div>
//                        <div>Lastname: {user.lastname}</div>
//                        <div>Department: {user.departement}</div>
//                        <button onClick={() => handleEdit(user)}>Edit</button>
//                    </li>
//                ))}
//            </ul>
//            <h3>Edit User</h3>
//            <div>
//                <label>ID:</label>
//                <input type="text" name="id" value={editedUser.Id} onChange={handleChange} disabled />
//                <br />
//                <label>Name:</label>
//                <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
//                <br />
//                <label>Lastname:</label>
//                <input type="text" name="lastname" value={editedUser.lastname} onChange={handleChange} />
//                <br />
//                <label>Department:</label>
//                <input type="text" name="departement" value={editedUser.departement} onChange={handleChange} />
//                <br />
//                <button onClick={handleUpdate}>Update</button>
//            </div>
//        </div>
//    );
//};

export default Edit;
