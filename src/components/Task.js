import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

function Task({ data, onDelete }) {
  const [completed, setCompleted] = useState(data.completed);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const listStyle = {
    backgroundColor: '#242424',
    maxHeight: isMobile ? '5vh' : '7vh',
    width: isMobile ? '100vw' : '100%',
    color: '#fff',
    fontSize: isMobile ? 'calc(10px + 2vmin)' : 'calc(10px + 1.2vmin)',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid',
    borderColor: '#454545',
    paddingBottom: isMobile ? '2%' : '1%',
    paddingTop: isMobile ? '2%' : '1%',
  };

  const checkboxStyle = {
    marginRight: isMobile ? '0.5rem' : '1rem',
    marginLeft: isMobile ? '1rem' : '0',
    height: '5vh',
    width: isMobile ? '5vw' : '1.2vw',
  };

  const titleStyle = {
    fontWeight: 'normal',
    textDecoration: completed ? 'line-through' : 'none',
  };

  const iconContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  };

  const trashCanStyle = {
    height: '6vh',
    width: isMobile ? '5vw' : '2vw',
  };

  const titleContainer = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'left',
    alignItems: isMobile ? 'center' : 'left',
  };

  const iconClass = {
    margin: '5px',
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleDeleteClick = () => {
    onDelete(data.task);
  };

  return (
    <div style={listStyle}>
      <div style={iconContainer}>
        <input
          type="checkbox"
          style={{ ...checkboxStyle, margin: '1em' }}
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <div style={titleContainer}>
          <h3 style={titleStyle}>{data.task}</h3>
        </div>
        <BsFillTrashFill
          style={{ ...trashCanStyle, margin: '1em' }}
          onClick={handleDeleteClick}
          className={iconClass}
        />
      </div>
    </div>
  );
}

export default Task;
