import React, { useState } from 'react'
import TaskList from './TaskList';


function Form() {
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: e.target[0].value,
      id: Date.now(),
      done: false,
    };
    const updatedList = [...list, newTask];
    setList(updatedList);
  };

  const handleDelete = (taskId) => {
    const updatedList = list.filter(task => task.id !== taskId);
    setList(updatedList);
  };

  const handleCheck = (taskId, done) => {
    const updatedList = list.map(task =>
      task.id === taskId ? { ...task, done } : task
    );
    setList(updatedList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <input type='text' placeholder="Type your task" />
        <button type="submit">Add item</button>
      </div>
      <TaskList list={list} onDelete={handleDelete} onCheck={handleCheck} />
    </form>
  );
}

export default Form;