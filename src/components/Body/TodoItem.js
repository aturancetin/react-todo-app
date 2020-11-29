import React from 'react';

const TodoItem = props => {

    

    return (
        <div  >
            <button  >Completed</button>
            {props.input}
            <button onClick={props.deleteHandler.bind(this, props.id)} >Delete</button>
        </div>
    );
}

export default TodoItem;