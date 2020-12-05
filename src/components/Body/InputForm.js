import React, { useState, createRef } from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {

    const [userInput, setUserInput] = useState(''); 

    const inputRef = createRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUserInput(inputRef.current.value);
        props.userInputHandler({input: userInput, isComplete: false});
        inputRef.current.value = "";
        
    }

    const onChangeHandler = (e) => {
        setUserInput(inputRef.current.value);
    }

    return (
        <form onSubmit={onSubmitHandler} className={classes.InputForm} >
            <input placeholder="Enter a task..." type="text" ref={inputRef} onChange={onChangeHandler} />
            <button className={'button'} type="submit" >Add Task</button>
        </form>
    );
}

export default InputForm;