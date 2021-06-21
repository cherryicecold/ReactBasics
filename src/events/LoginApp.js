import { tsImportEqualsDeclaration } from '@babel/types';
import React, {Component} from 'react';
import ReactDOM from 'react';



class LoginApp extends React.Component{
    constructor(){
        super();
        this.state={
            isLoggedIn: false,
            loading: false,
            character :{}
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("http://dummy.restapiexample.com/api/v1/employee/1")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                character: data,
                loading: false
            })
        });
    }

    render(){
        let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
        let displayText = this.state.isLoggedIn ? "you are Logged In" : "You are Logged out";
        const text = this.state.loading ? "loading..." : "Karan";
        return(
            <div>
             
        <button onClick={this.handleClick}> {buttonText}</button>
           {displayText}  <br/>
           {text}
            
           
        </div>
        )
    }


handleClick(){
    this.setState(prevState =>{
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
    })
    }
}

export default LoginApp;