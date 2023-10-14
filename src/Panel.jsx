import React from 'react';
import Task from './Task';

const Panel = ({ tasks, toggleFinished, editTask, isTaskEdit }) => {
  return (
    <div className="panel">
      {tasks &&
        tasks.map((task, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={task.title}
              content={task.content}
              isComplete={task.isComplete}
              toggleFinished={toggleFinished}
              editTask={editTask}
              
            />
          );
        })}
    </div>
  );
};

export default Panel;
