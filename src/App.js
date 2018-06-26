import React, { Component } from 'react';
import './timeline.css';

class Timeline extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashButtom"></div>
              <div className="circle"></div>
            </div>
            <span className="title">Timeline</span>
            <input
              type="text"
              className="searchInput"
              placeholder="Search..." />
            <div className="fa fa-search searchIcon"></div>
          </div>
          <div className="content">
            <div className="line"></div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="doug"
                  src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <Timeline />
      </div>
    );
  }
}

export default App;
