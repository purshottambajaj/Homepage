import React, { useState } from 'react';
import Modal from './Modal';
const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
    { id: 4, name: 'Task 4', completed: true },
    { id: 5, name: 'Task 5', completed: true },
    { id: 6, name: 'Task 6', completed: true },
    { id: 7, name: 'Task 7', completed: true },
  ]);
  const [taskName, setTaskName] = useState('');
  const [currentTask, setCurrentTask] = useState(tasks.slice(0, 4));
  const [pageIndex, setPageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTaskName = (id, newName) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  const handlePageChange = (direction) => {
    setPageIndex(prevIndex => {
      const newIndex = prevIndex + direction;
      const totalPages = Math.ceil(tasks.length / 4);
      return Math.max(0, Math.min(newIndex, totalPages - 1));
    });
  };

  const displayedTasks = tasks.slice(pageIndex * 4, (pageIndex + 1) * 4);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <div className="mb-2">
        <div className="mb-2">
  <span className="font-semibold">{tasks.length} Total Tasks</span> | 
  <span className="font-semibold">{tasks.filter(task => !task.completed).length} To Do</span> | 
  <span className="font-semibold">{tasks.filter(task => task.completed).length} Done</span>
</div>

        </div>
        <button 
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Add a New Task
        </button>
        <hr className="my-4 border-gray-300" />
        
        <div className="space-y-4">
          {displayedTasks.map(task => (
            <div key={task.id} className="flex items-center border border-red-500 p-2 rounded">
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(task.id)} 
                className="mr-2"
              />
              <div className="flex-1">{task.name}</div>
              <div className="relative">
                <button className="text-gray-500">
                  ⚙️
                </button>
                <div className="absolute right-0 bg-white shadow-lg rounded p-2 mt-1 hidden group-hover:block">
                  {tasks.map(t => (
                    <div key={t.id} className="hover:bg-gray-200 p-1 cursor-pointer" 
                         onClick={() => updateTaskName(task.id, t.name)}>
                      {t.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <button 
            className="bg-gray-300 p-2 rounded" 
            onClick={() => handlePageChange(-1)} 
            disabled={pageIndex === 0}
          >
            Previous
          </button>
          <button 
            className="bg-gray-300 p-2 rounded" 
            onClick={() => handlePageChange(1)} 
            disabled={(pageIndex + 1) * 4 >= tasks.length}
          >
            Next
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addTask}
      />
    </div>
  );
};

export default TaskPage;



