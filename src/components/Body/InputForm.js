import React, { useState } from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {

    const [userInput, setUserInput] = useState(''); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.userInputHandler({input: userInput, isComplete: false});
        
    }

    return (
        <form onSubmit={onSubmitHandler} className={classes.InputForm} >
            <input placeholder="Enter a task..." type="text" onChange={event => {
                setUserInput(event.target.value);
            } } />
            <button className={'button'} type="submit" >Add Task</button>
        </form>
    );
}

export default InputForm;