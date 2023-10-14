import React, { useState } from 'react';

const TaskBar = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState({
    title: '',
    content: '',
    isComplete: false,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setTaskInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    addTask(taskInput);

    setTaskInput({
      title: '',
      content: '',
      isComplete: false,
    });

    event.preventDefault();
  };

  return (
    <form className="taskbar" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          className="input"
          placeholder="Title"
          name="title"
          onChange={handleInput}
          value={taskInput.title}
        />
        <input
          type="text"
          className="input"
          placeholder="Content"
          name="content"
          onChange={handleInput}
          value={taskInput.content}
        />
      </div>
      <div className="row">
        <button className="btn btn--full">Add Task</button>
      </div>
    </form>
  );
};

export default TaskBar;
