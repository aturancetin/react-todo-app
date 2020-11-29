import React, { useState } from 'react';

const InputForm = props => {

    const [userInput, setUserInput] = useState(''); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.userInputHandler({input: userInput});
    }

    return (
        <form onSubmit={onSubmitHandler} >
            <input type="text" onChange={event => setUserInput(event.target.value)} />
            <button type="submit" >Add Task</button>
        </form>
    );
}

export default InputForm;