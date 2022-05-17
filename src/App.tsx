import {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from "./hook";

// import { addTodo } from './store/todoSlice';
import { fetchTodos, addNewTodo } from './store/todoSlice';

import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
    const dispatch = useAppDispatch()
    const [title, setText] = useState('')
    const {loading, error} = useAppSelector(state => state.todos)

    const handleAction = () => {
        if(title.trim().length) {
            dispatch(addNewTodo(title));
            setText('');
        }
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div className='App'>
            <NewTodoForm
                value={title}
                updateText={setText}
                handleAction={handleAction}
            />

            {loading && <h2>Loading...</h2>}
            {error &&  <h2>An error occured: {error}</h2>}

            <TodoList />
        </div>
    );
}

export default App;
