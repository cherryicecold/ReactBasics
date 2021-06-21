import react from 'react';


function JokeComp(props){
    return (
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
            <hr/>
        </div>

    )
}
export default JokeComp;    