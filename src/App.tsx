import {useState} from 'react';
import { useAppDispatch } from "./hook";

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
    const [title, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if(title.trim().length) {
            dispatch(addTodo(title));
            setText('');
        }
    }

    return (
        <div className='App'>
            <NewTodoForm
                value={title}
                updateText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
}

export default App;
