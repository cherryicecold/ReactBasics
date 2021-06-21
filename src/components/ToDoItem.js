import react from 'react';
import reactDom from 'react-dom';
import {} from './style.css'

function TodoItem(props) {
    const completedStyle ={
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input type = 'checkbox' 
            checked = {props.isCompleted}
            onChange={ () => console.log("changed") }></input>
            <p style ={ props.isCompleted ? completedStyle : null}>Exercises - push ups , jog, jumping</p>
        </div>
    )
}
export default TodoItem;