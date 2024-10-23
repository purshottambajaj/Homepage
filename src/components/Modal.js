import React,{useState} from 'react'

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [newTaskName, setNewTaskName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTaskName) {
        onSubmit(newTaskName);
        setNewTaskName('');
        onClose();
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Add New Task</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
              placeholder="Task Name"
            />
            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  

export default Modal