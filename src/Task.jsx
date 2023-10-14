import React from 'react';
import Button from './Button';

const Task = ({ id, title, content, toggleFinished }) => {
  const trimText = (text, chars) => {
    let isTrimmed =
      text.length > chars ? text.substring(0, chars) + '...' : text;

    return isTrimmed;
  };

  const handleFinished = (id) => {
    toggleFinished(id);
  };

  return (
    <div className="task">
      <div className="task-row">
        <h2>{title}</h2>
        <p>{trimText(content, 50)}</p>
      </div>
      <div className="row">
        <Button
          label="Finished"
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
