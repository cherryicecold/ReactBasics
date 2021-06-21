
import React, {Component} from 'react';


class AppState extends Component {
    constructor(){
        super();
        this.state = {
            name:"Sally",
            age: 25
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}


    export default AppState;