import React, {Component} from 'react';


class FormOneApp extends Component{
    constructor(){
        super()
        this.state ={
            firstName: "",
            lastName:"",
            isFriendly: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstName:event.target.value
        })

    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                <h1>{this.state.firstName}</h1>

                <textarea value={"some Default value"}/>
                <input
                    type="checkbox"
                    checked={this.state.isFriendly}/>

            </form>

        )
    }
}
export default FormOneApp;
