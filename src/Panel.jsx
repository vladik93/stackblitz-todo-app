import React from 'react';
import Task from './Task';

const Panel = ({ tasks, toggleFinished }) => {
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
              toggleFinished={toggleFinished}
            />
          );
        })}
    </div>
  );
};

export default Panel;
