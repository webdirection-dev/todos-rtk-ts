import React from "react";
import { useAppSelector } from "../hook";
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <ul>
            {todos.map((i) => (
                <TodoItem
                    key={i.id}
                    {...i}
                />
            ))}
        </ul>
    );
};

export default TodoList;
