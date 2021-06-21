import react from 'react';
import { ReactDOM } from 'react';


function AppEvent(){
    return(
        <div>
            <img onMouseOver={() => console.log("Hovered")} src ="https://www.fillmurray.com/200/100"/>
            <br/>
            <br/>
            <button onClick= {() => console.log("clicked")}>click me</button>
        </div>
    )
}


export default AppEvent;
