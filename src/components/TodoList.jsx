import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
