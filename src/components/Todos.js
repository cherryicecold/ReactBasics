import react from 'react';
import reactDom from 'react-dom';
import TodoItem from './ToDoItem';
import {} from './style.css'

function Todos(){
    const firstName = 'Karan';
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if(hours < 12){
        timeOfDay = 'morning'
    }else if (hours > 12)
        timeOfDay ='night'
    return(
        <div>
            <h1>
                Good {timeOfDay} {firstName}, 
            </h1>
        <TodoItem isCompleted ="true"/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        
       <input type = 'checkbox'></input>
        <p>work</p>
        <input type = 'checkbox'></input>
        <p>Bath</p>
        <input type = 'checkbox'></input>
        <p>Eat and sleep</p>
        </div>  
    )
}

export default Todos;