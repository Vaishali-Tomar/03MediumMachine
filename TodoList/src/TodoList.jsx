import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({ id: null, text: '' });

  const handleChange = (e) => {
    setCurrentTodo({...currentTodo, text: e.target.value})
  }

  const handleSubmit = () => {
     if(currentTodo.text.trim()){
      if(currentTodo.id){
        setTodos(
          todos.map((todo) => {
            todo.id === currentTodo.id ? {...todo, text:currentTodo.text} : todo
          })
        )
      }else{
        setTodos([...todos, { id: Date.now(), text: currentTodo.text}])
      }
      setCurrentTodo({id: null, text: ''})
     }
  }

  const handleEdit = (todo) =>{
    setCurrentTodo(todo);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        value={currentTodo.text}
        onChange={handleChange}
        placeholder="Add or edit a todo"
      />
      <button onClick={handleSubmit}>{currentTodo.id ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
