import React, { useState } from "react";
import axios from "axios";
import "../App";
import User from "./User";


const Login = () => {
    const [Data, setData] = useState({
        ID:"",
        Name:"",
        lastname:"",
        departement:"",
       
    });
 
const handleChange = (e) => {
    const value = e.target.value;
        setData({
            ...Data,
            [e.target.name]: value
        });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            Id: Data.id,
            Name: Data.name,
            Lastname: Data.lastname,
            Departement: Data.departement
        };
        /*console.log("departement" + userData.Department + "" + userData.Name + userData.Lastname + userData.Id);*/
        axios.post("https://localhost:7205/api/User", userData,).then((response) => {
            console.log(response.status, response.Data.token);  
            
        })
        .catch ((error) => {
            if (error.response) {
                console.error("Response data:", error.response.data);
            } else if(error.request) {
                
                console.error("No response received:", error.request);
            }
    
        });
        
   };

    return (
      
        <div className='dd'>
            <h1 className='login' >Employee Details</h1>

            <div className='frm'>
            <form onSubmit={handleSubmit}>
                   
                    <label className='label' htmlFor="text">
                        ID:  </label>
                    <input
                        type="text"
                        name="id"
                        value={Data.id}
                        onChange={handleChange}
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                    />
                    <br />
                    <br />
                    <label className='label' htmlFor="text">
                        Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={Data.name}
                        onChange={handleChange}
                        style={{
                            width: '200px',
                            borderRadius:'3px'
                        } }
                    />
                    <br />
                    <br />
                    <label className='label' htmlFor="email">
                        Lastname:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={Data.lastname}
                        onChange={handleChange}
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                    />
                   
                    <br />
                    <br />
                    <label className='label' htmlFor="text">
                        Department:</label>
                    <input
                        type="text"
                        name="departement"
                        value={Data.departement}
                        onChange={handleChange}
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                    />
              
                <br/>
                    <div className='btn'>
                        <button  type="submit">Submit</button>
                </div>
                </form>
                
            </div>
           <button><a href="/User">UsersList</a></button>
            </div>
    );
};
export default Login;