import React, { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Ayl from './components/Ayl';

export default function App(){

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn Js',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Learn CSS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'learn React',
      isCompleted: false,
    }
  ]);

  console.log(todos)

  return (
    <div className='App'>
      <Ayl todos={todos}/>
      <TodoForm onAdd={text => {
        setTodos(
          [
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            }
          ]
        )
      }}/>
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => {
            console.log(t)
            return t.id !== todo.id
          }))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isCompleted))
      }}/>
    </div>
  )
}