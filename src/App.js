import React, { useEffect, useState } from 'react';
import Task from './components/Task';
import NewTask from './components/NewTask';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const containerStyle = {

  };

  const appStyle = {

    backgroundColor: '#1f1f1f',
    minHeight: isMobile ? '100vh' : '100vh',


  };

  const titleStyle = {
    color: '#fff',
    margin: '0px',
    textAlign: 'center',
    fontSize: isMobile ? '28px' : '52px'
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('Tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      console.log('No tasks found');
      console.log('Creating example tasks...');
      const exampleTasks = [
        { task: 'Learn to code', completed: false },
        { task: 'Learn React', completed: false },
      ];
      localStorage.setItem('Tasks', JSON.stringify(exampleTasks));
      setTasks(exampleTasks);
    }
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.task !== task);
    setTasks(updatedTasks);
    localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
  };
  

  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <div style={containerStyle}>
          <h3 style={titleStyle}>Too-doer</h3>
        </div>
      </header>

      <div>
        {tasks.map((task, index) => (
          <Task key={index} data={task} onDelete={handleDeleteTask} />
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '0px' }}>
        <NewTask onTaskAdded={handleTaskAdded} />
      </div>
    </div>
  );
}

export default App;
