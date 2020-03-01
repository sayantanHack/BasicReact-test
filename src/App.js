import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//<<<<<<< HEAD
import Users from "./users/Users";
import Child from './parentToChild/child';

class App extends Component{
  state = {
    title: "click mee!"
  }

  // Change title for changing the state title of child .
  changeTitle= (newTitle)=>{
    this.setState({title:newTitle});
  }

  render() {
    return(
      <div className="App">
        <h1>Yoo NiGGGa!! This is from APP JS</h1>
        <Child actions={this.changeTitle.bind(this, "Hello Click")} title= {this.state.title} />
        <Users/>
      </div>
    );
  }
}

export default App;
