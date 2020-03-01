import React,{Component} from "react";
import User from './User';

class Users extends Component{
    state ={
        users: [
            {name:"Pakku", age: 23},
            {name:"Debraj", age: 20},
            {name:"Johny", age:32}
        ],
        title: "State Users.js ==> I`m the Title from the state of user."

    }

    younger= ()=>{
        console.log("Clicked young!!");
        // Creating a new state for dynamically change the users data. We used map method
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            while (tempUser.age >= 3){
                tempUser.age -= 2;
                return tempUser;
            }
            return 0;
        });
        //to change anything in React Virtual DOM setState() is the method 
        this.setState({newState});
        console.log(this.state.users); // checking where the Main DOM is changing or not
    }
        
    render(){
        return (<div>
            <h1>
                HEllO KIDD0 !!I`m from User
            </h1>
        <h3>{this.state.title}</h3>
            <p>
                Bellow the name and ages are taken from state users data.
            </p>
          {/* The hard coded for each users
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        */}

        {
        this.state.users.map((user)=>{
            return <User age={user.age}>{user.name}</User>
        })
        }
        <p>
            Click the bellow button to young 2 years.
        </p>
        <button onClick={this.younger}>Age reducer</button>    
        
        </div>);
    }
}

export default Users;