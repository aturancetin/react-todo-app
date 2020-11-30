import React, {useState} from 'react';

import TodoList from './TodoList';
import classes from './AppBody.module.css';

const AppBody = () => {

    



    return (
        <div className={classes.AppBody}>
            
            <TodoList />
            
        </div>
    )
}

export default AppBody;