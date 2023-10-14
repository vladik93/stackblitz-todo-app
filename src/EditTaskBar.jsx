import React from 'react';
import Button from './Button';

const EditTaskBar = ({selectedTask}) => {
    return (
        <form className="taskbar">
        <div className="row">
          <input
            type="text"
            className="input"
            placeholder="Title"
            name="title"
            value={selectedTask.title}
            
          />
          <input
            type="text"
            className="input"
            placeholder="Content"
            name="content"
          
          />
        </div>
        <div className="row">
          <Button full label="Edit Task" />
        </div>
      </form>
    )
}

export default EditTaskBar;