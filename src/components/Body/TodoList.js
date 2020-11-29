import React, {useState} from 'react';
import TodoItem from './TodoItem';
import InputForm from './InputForm';

const TodoList = props => {

    const [todoItem, setTodoItem] = useState([]);

    const onAddHandler = userInput => {
        setTodoItem(prevInput => 
            [
                ...prevInput,
                {id: Math.random(), ...userInput}
            ]
        );   
    }

    const deleteHandler = inputID => {
        console.log(inputID);
        setTodoItem(prevInput => prevInput.filter(item => inputID !== item.id))
    }

   


    return (
        <div>
            <InputForm userInputHandler={onAddHandler} />
            <h2>Todos</h2>
            {todoItem.map(item => (
                <TodoItem key={item.id} 
                        id={item.id} 
                        input={item.input} 
                        deleteHandler={deleteHandler}
                        
                         /> 
            ))}
        </div>
    );
}

export default TodoList;