import React,{useState} from 'react';
import '../style/dashboard.css'
import App from '../App'
import Nav from  '../dashboardNav';
import LiveView from './liveView';
const Dashboard = () => {
    
    return (
        <div className='container'>
            {/* <Nav/> */}
            <App/>
        <div className="dashboard-container">   
        <div className="dashboard-item">
      <LiveView/>
        </div>
        <div className="dashboard-item">
        <p>The Mapbox Styles API lets you read and change map styles, fonts, and images. The Mapbox Tilequery API allows you to retrieve data about specific features from rasterarray and vector tilesets. The Mapbox Uploads API transforms geographic data into tilesets that can be used with maps and geographic applications</p>
        </div>
      </div>
      </div>
    );
};


export default Dashboard;
