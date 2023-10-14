import React, { useState, useEffect } from 'react';
import './style.css';
import TaskBar from './TaskBar';
import EditTaskBar from './EditTaskBar';
import Panel from './Panel';
import Button from './Button';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [ isTaskEdit, setIsTaskEdit ] = useState(false);
  const [ selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

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

  const editTask = (id) => {
   setSelectedTask(tasks.filter((x, index) => id === index).reduce((acc, current, currIndex) => {
    acc[currIndex] = current;
    return acc;
   }));

   setIsTaskEdit(!isTaskEdit);




    
  }

  return (
    <div>
      <Panel tasks={tasks} toggleFinished={toggleFinished} editTask={editTask} />
      {isTaskEdit ? 
        <EditTaskBar selectedTask={selectedTask} />
        :
        <TaskBar addTask={addTask} />
      }
      
    </div>
  );
}
