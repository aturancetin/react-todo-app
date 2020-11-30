import React from 'react';

const TodoItem = props => {

    

    return (
        <div className={props.isComplete ? 'yellow' : ''} >
            <button onClick={props.completeHandler.bind(this, props.id)} >Completed</button>
            {props.input}
            <button onClick={props.deleteHandler.bind(this, props.id)} >Delete</button>
        </div>
    );
}

export default TodoItem;