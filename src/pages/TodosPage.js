import React from 'react';
import Todo from "../conmponents/Todo";
import style from './todospage.module.css'

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"]
    return (
        <div>
            <h1 className={style.title}>Todos Page</h1>
            {
                todos.map((item, index) => (
                    <Todo key={index} todo={item}/>
                ))
            }
        </div>
    );
};

export default TodosPage;