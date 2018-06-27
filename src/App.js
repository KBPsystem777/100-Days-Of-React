import React, { Component } from 'react';
import 'w3-css/w3.css';



class Event extends React.Component {
  render() {
    return (
      <div>
        <div className="item">
          <div className="avatar">
            <img
              alt="doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span>{this.props.time}</span>
          <p>{this.props.status}</p>
        </div>
      </div>
    );
  }
}

const SearchButton = () => <div className="fa fa-search searchIcon"></div>;

const InputForm = () => <div>
  <input
    type="text"
    className="searchInput"
    placeholder="Search..." />
  </div>

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
            <span className="w3-large">Timeline</span>
            <SearchButton />
            <InputForm />
            <Event status= "Ate Lunch" time = "An hour ago"/>
            <Event status="Travelling back home" time="3 Hours ago"/>
            <Event status="Meeting with the gangsters!" time="5 Hours ago"/>
            <Event status="Will Sleep now..." time="A day ago"/>
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
