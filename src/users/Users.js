import React,{Component} from "react";
import User from './User';

class Users extends Component{
    state =[
        {name:"Pakku", age: 23},
        {name:"Debraj", age: 20},
        {name:"Johny", age:32}
    ]
    render(){
        return (<div>
            <h1>
                HEllO KIDD0 !!
            </h1>
        <h3>{this.props.title}</h3>
            <p>
        <User age={this.state[0].age}>{this.state[0].name}</User>
        <User age={this.state[1].age}>{this.state[1].name}</User>
            </p>
            
        </div>);
    }
}

export default Users;