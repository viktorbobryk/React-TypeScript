import React, {useState, useEffect}from "react";
import {TodoForm} from '../components/TodoForm'
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

export const TodosPage: React.FC = ()=>{
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    const addhandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos((prev) => [newTodo, ...todos])
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo =>{
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    };

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm ('do you want to remove element');
        if (shouldRemove){
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    };
    return(
        <>
            <TodoForm onAdd={addhandler}/>
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    )
};