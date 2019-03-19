import React from 'react'

function Joke(props){
    return (
        <div>
            <h2>{props.question}</h2>
            <h2>{props.answer}</h2>
            <hr/>
        </div>
    )
}

export default Joke