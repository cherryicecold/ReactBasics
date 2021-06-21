import React, {Component} from 'react';
import { ReactDOM } from 'react';
//import Conditioning from './conditional/Conditioning';

class ConditionalApp extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                isLoading: false
            })
        },1500)
    }

    render() {
        return (
        <div>
          
 
         </div>
          //  <Conditioning isLoading={this.state.isLoading}/>
        )
    }
}

export default ConditionalApp;
