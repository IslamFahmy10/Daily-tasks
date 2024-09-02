import React from "react";


function TaskList({ list, onDelete, onCheck }) {
  return (
    <div className="task-list">
      {list.map((task, index) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => onCheck(task.id, e.target.checked)}
          />
          <label className={task.done ? "done" : ""}>
            {task.name}
          </label>

          <span> Deadline: <input className='deadline'  type="time"  /> </span>
          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;


