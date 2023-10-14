import React from 'react';

const Button = ({
  full,
  label = 'Label',
  type = 'primary',
  clickEvent,
  objectId,
}) => {
  const assignBtnType = (type) => {
    switch (type) {
      case 'primary': {
        return 'btn--primary';
      }
      case 'secondary': {
        return 'btn--secondary';
      }

      default:
        return 'btn--primary';
    }
  };

  return (
    <button
      className={`btn ${full ? 'btn--full' : ''} ${assignBtnType(type)}
`}
      onClick={() => clickEvent(objectId)}
    >
      {label}
    </button>
  );
};

export default Button;
