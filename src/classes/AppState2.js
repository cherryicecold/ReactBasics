
import React, {Component} from "react";
import { render } from "@testing-library/react";


class AppState2 extends Component {
    constructor(){
        super();
        this.state ={
            isLoggedIn: true
        }
    }
    render(){
        let wordDisplay;
        if(this.state.isLoggedIn === true){
            wordDisplay ="in"
        }else{
            wordDisplay ="out"
        }
    return(
        <div>
            <h1> you are currently logged {wordDisplay}</h1>
        </div>
    )
}
}
export default AppState2;