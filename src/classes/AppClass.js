import React from 'react';
import react from 'react';
import reactDom from 'react-dom';

class Appclass extends React.Component{

    render(){
        const date = new Date();
        return(
            <div>
                <h1>Code goes here </h1>
            </div>
        )
    }
}
//export default Appclass;


class Appclass1 extends React.Component {
    render(){
    return(
        <div>
            <Header username="Karan"/>
            <Greeting/>
        </div>
    )
}
}

export default Appclass1;


class Header extends React.Component{
    render(){
    return(
        <header>
            <p>welcome, {this.props.username} !</p>
        </header>
    )
}
}

class Greeting extends React.Component{
    render(){
    const date = new Date();
    const hours = date.getHours();
    console.log("hours " + hours);
    
    let timeOfDay;
    if(hours > 12 ){
        timeOfDay = "good night";
    }
    else {
        timeOfDay ="good day";
    }
    return( 
        <div>       
       <h1>  {this.timeOfDay} to you sir or madam !  </h1>
        
        </div>

    )
}
}


