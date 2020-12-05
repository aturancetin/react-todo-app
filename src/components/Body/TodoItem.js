import React from 'react';
import classes from './TodoItem.module.css';
import CompleteButton from '../../assets/check-mark.svg';
import DeleteButton from '../../assets/delete.svg';



const TodoItem = props => {

    

    return (
        <div className={classes.TodoItem} >
            <button onClick={props.completeHandler.bind(this, props.id)} > 
                <img alt="complete-button" className={classes.CompleteButton} src={CompleteButton}/>
            </button>
            <div className={props.isComplete === true ? classes.completed : ""}>
            {props.input}
            </div>
            
            <button onClick={props.deleteHandler.bind(this, props.id)} >
                <img alt="delete-button" className={classes.DeleteButton} src={DeleteButton}/>
            </button>
        </div>
    );
}

export default TodoItem;

