import React, { useState, useEffect } from 'react';
import './style.css';
import TaskBar from './TaskBar';
import Panel from './Panel';
import Button from './Button';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    console.log(newTask);
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  const toggleFinished = (id) => {
    setTasks(prevState => {
      return prevState.map((task, index) => {
        if(id === index) {
          return {
            ...task,
            isComplete: !task.isComplete
          } 
        } else {
          return task;
        }
      })
    })
    
  };

  return (
    <div>
      <Panel tasks={tasks} toggleFinished={toggleFinished} />
      <TaskBar addTask={addTask} />
    </div>
  );
}
