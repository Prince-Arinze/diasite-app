import React, { Component } from "react";
import { FaHome, FaUserAlt, FaTwitter,FaAddressCard,FaInstagram, FaProjectDiagram, FaAddressBook, FaBlog, FaMapPin, FaFacebookF } from "react-icons/fa";
import "./MainDashboard.css";

class MainDashboard extends Component{
  render() {
    return(
      
         <div className="container">
             <div className="sidebar">
                  <h2>Dashboard</h2>
                  <ul>
                    <li><a href="/"><FaHome className="fas-icon"/>Home</a></li>
                    <li><a href="/"><FaUserAlt className="fas-icon"/>Profile</a></li>
                    <li><a href="/"><FaAddressCard className="fas-icon"/>Archive a file</a></li>
                    <li><a href="/"><FaProjectDiagram className="fas-icon"/>Portfolio</a></li>
                    <li><a href="/"><FaBlog className="fas-icon"/>View your Archived</a></li>
                    <li><a href="/"><FaAddressBook className="fas-icon"/>Contacts</a></li>
                    <li><a href="/"><FaMapPin className="fas-icon"/>Map</a></li>
                  </ul>
                  <div className="socials">
                     <a href="/"><FaFacebookF /></a>
                     <a href="/"><FaTwitter /></a>
                     <a href="/"><FaInstagram /></a>
                  </div>
             </div>
             <div className="main">
                <div className="header">H! Welcome admin1</div>
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
                        <td>admin1</td>
                        <td>Requested for access to view a file</td>
                        <td>Pending</td>
                      </tr>
                      <tr style={{background: "greay"}}>
                        <td>admin1</td>
                        <td>Uploaded a document</td>
                        <td>Confirmed</td>
                      </tr>
                    </table>
                  </div>

                </div>
             </div>
         </div>
    )
  }
}

export default MainDashboard;