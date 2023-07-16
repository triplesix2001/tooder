import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';

function NewTask({ onTaskAdded }) {
    
    const [newTask, setNewTask] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Add this line to detect mobile devices
  
    const containerStyle = {
      backgroundColor: '#242424',
      minHeight: isMobile ? 'fit-content' : '1vh',
      maxHeight: isMobile ? 'fit-content' : '1vh',
      paddingTop: '3%',
      paddingBottom: '3%',
      fontSize: 'calc(10px + 5vmin)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      minWidth: isMobile ? '100vw' : '100vw', // Use '100%' for mobile, '50%' for desktop
      margin: isMobile ? '0' : '0 auto', // Use '0' for mobile, '0 auto' for desktop
    };
  
    const inputBox = {
      fontSize: isMobile ? '0.8em' : '0.6em',
      width: isMobile ? '60vw' : '90vw',
      height: isMobile ? '3vh' : '5vh',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      outline: 'none',
      backgroundColor: '#333',
      color: 'white',
      maxWidth: isMobile ? '100%' : '40%', // Use '100%' for mobile, '40%' for desktop
    };
  
    const button = {
      width: isMobile ? '5vh' : '8vh',
      height: isMobile ? '5vh' : '8vh',
      borderRadius: '4px',
      border: 'none',
      outline: 'none',
      backgroundColor: '#4287f5',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      maxWidth: isMobile ? '100%' : '20%', // Use '100%' for mobile, '10%' for desktop
    };
  
    const icon = {
      fontSize: isMobile ? '8em' : '1em',
      color: 'black',
      height: isMobile ? '36px' : '52px',
      width: isMobile ? '36px' : '52px',
    };

  const addToStorage = () => {
    try {
      console.log(newTask);
      const taskObject = { task: newTask, completed: false };

      // Get existing task list from localStorage
      const existingTasks = localStorage.getItem('Tasks');

      let tasks = [];

      if (existingTasks) {
        // Parse the existing task list from JSON string
        tasks = JSON.parse(existingTasks);
        console.log(existingTasks);
      }

      // Add the new task to the existing task list
      tasks.push(taskObject);

      // Store the updated task list back in localStorage
      localStorage.setItem('Tasks', JSON.stringify(tasks));

      // Invoke the callback with the new task
      onTaskAdded(taskObject);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <input style={inputBox} type="text" value={newTask} onChange={handleInputChange} placeholder="Add a task" />
      <div style={button} onClick={addToStorage}>
        <IoIosAdd style={icon} />
      </div>
    </div>
  );
}

export default NewTask;
