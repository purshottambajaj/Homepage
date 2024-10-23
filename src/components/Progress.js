import React, { useState } from 'react';

const ProgressPage = () => {
  const [progress, setProgress] = useState(25);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 1);
    }
  };

  return (
    <div className="h-1/6  flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Personal Progress</h2>
        <a href="/board" className="text-blue-500 underline">Go to Board</a>
        <hr className="my-4 border-gray-300" />
        <div className="flex items-center mb-4">
          
          <div className="flex-1 ml-4">
            <div className="text-lg font-semibold">Progress Name</div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <button 
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
            onClick={increaseProgress}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
