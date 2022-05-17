import React from "react";
import { useAppDispatch } from "../hook";

// import {toggleComplete, removeTodo} from '../store/todoSlice';
import {deleteTodo, toggleStatus} from '../store/todoSlice';

interface IProps {
    id: string;
    title: string;
    completed: boolean;
}

const TodoItem: React.FC<IProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </li>
    );
}

export default TodoItem;
