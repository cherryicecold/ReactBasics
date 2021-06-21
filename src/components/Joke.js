import React from "react";
import App from "../App";
import jokesData from "./jokesData"
import JokeComp from "./JokeComp"

function Joke() {
const jokeComponents =  jokesData.map(joke => <JokeComp  question={joke.question} answer=
    {joke.answer} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default Joke;