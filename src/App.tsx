import React, {useState} from 'react';
import {Navbar} from './components/navbar';
import {TodoForm} from './components/todoForm'
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces"

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
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

  return (
    <>
      <Navbar/>
      <div className="container">
          <TodoForm onAdd={addhandler}/>
          <TodoList
              todos={todos}
              onToggle={toggleHandler}
              onRemove={removeHandler}
          />
      </div>
    </>
  );
};

export default App;
