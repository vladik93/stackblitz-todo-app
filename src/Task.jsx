import React from 'react';
import Button from './Button';

const Task = ({ id, title, content, isComplete, toggleFinished, editTask }) => {
  const trimText = (text, chars) => {
    let isTrimmed =
      text.length > chars ? text.substring(0, chars) + '...' : text;

    return isTrimmed;
  };

  const handleFinished = (event, id) => {
    toggleFinished(id);
    event.stopPropagation();
  };

  const handleEdit = (id) => {
   
      editTask(id);
    
  }

  return (
    <div className="task" onClick={() => handleEdit(id)}>
      <div className="task-row" style={{textDecoration: isComplete ? 'line-through' : 'none'}}>
        <h2>{title}</h2>
        <p>{trimText(content, 50)}</p>
      </div>
      <div className="row">
        <Button
          label={isComplete ? "In Progress" : "Finished"}
          type="secondary"
          clickEvent={handleFinished}
          objectId={id}
        />
        <Button label="Delete" />
      </div>
    </div>
  );
};

export default Task;
