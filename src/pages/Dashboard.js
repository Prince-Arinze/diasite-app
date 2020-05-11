import React, { Component } from "react";
import { FaHome, FaUserAlt, FaTwitter,FaAddressCard,FaInstagram,  FaAddressBook, FaBlog, FaMapPin, FaFacebookF, FaArchive, FaFileArchive, FaStickyNote, FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import diasite from "./../images/defence.jfif";
import "./Dashboard.css";

class Dashboard extends Component{

  render() {
    return(
      
         <div className="container">
             <div className="sidebar">
                  <h2>Dashboard</h2>
                  <ul>
                    <li><a href="/"><FaHome className="fas-icon"/>Home</a></li>
                    <li><a href="/"><FaUserAlt className="fas-icon"/>Add Admins</a></li>
                    <li><a href="/"><FaAddressCard className="fas-icon"/>View all activities</a></li>
                    <li><a href="/"><FaFileArchive className="fas-icon"/>View Archives</a></li>
                    <li><a href="/"><FaArchive className="fas-icon"/>Archives</a></li>
                    <li><a href="/"><FaStickyNote className="fas-icon"/>Documents</a></li>
                    <li><a href="/"><FaAddressBook className="fas-icon"/>Edit records</a></li>
                    <li><a href="/"><FaBell className="fas-icon"/>Notifiactions</a></li>
                    <li><a href="/"><AiFillSetting className="fas-icon"/>Settings</a></li>
                  </ul>
                  <div className="socials">
                     <a href="/"><FaFacebookF /></a>
                     <a href="/"><FaTwitter /></a>
                     <a href="/"><FaInstagram /></a>
                  </div>
             </div>
             <div className="main">
                <div className="header">Hi! You are welcome cypher </div>
                <div className="info">
                
                    <div className="w3-container">
                    <center><h2>View Activity Logs</h2></center>
                    <center><p>Recent activities</p></center>

                    <table className="w3-table w3-striped">
                      <tr style={{background: "black"}}>
                        <th>Admin</th>
                        <th>Activity</th>
                        <th>Status</th>
                      </tr>
                      <tr>
                        <td>admin1</td>
                        <td>Uploaded a document</td>
                        <td>Approved</td>
                      </tr>
                      <tr>
                        <td>admin2</td>
                        <td>Requested for access to view a file</td>
                        <td>Pending</td>
                      </tr>
                      <tr style={{background: "greay"}}>
                        <td>cypher</td>
                        <td>Granted access to admin1</td>
                        <td>Confirmed</td>
                      </tr>
                    </table>
                    
                  </div><br/>
                  <center><img src={diasite} alt="defence" /></center>
                </div>
             </div>
         </div>
    )
  }
}

export default Dashboard;