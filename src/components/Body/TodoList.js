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
        setTodoItem(prevInput => prevInput.filter(item => inputID !== item.id))
    }

    const completeHandler = inputID => {
        let updatedState = todoItem.map(item => {
            if(item.id === inputID) {
                item.isComplete = !item.isComplete ;
            }
            return item;
        })
        setTodoItem(updatedState);
        
    }

   


    return (
        <div >
            <InputForm userInputHandler={onAddHandler} />
            <div >
            {todoItem.map(item => (
                <TodoItem key={item.id} 
                        id={item.id} 
                        input={item.input} 
                        deleteHandler={deleteHandler}
                        completeHandler={completeHandler}
                        isComplete={item.isComplete}
                         /> 
            ))}
            </div>
            
        </div>
    );
}

export default TodoList;