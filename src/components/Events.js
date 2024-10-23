import React from 'react';

function Event() {
  return (<><div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w'>
    <div className='p-5 text-blue-600 text-xl'>Events</div>
    <hr/>
    <div className=" bg-white p-4">
      <h2 className="text-lg font-bold">eventName</h2>
      <p className="text-gray-500">
        Start-    End
      </p>
      <h3 className="text-md font-semibold mt-4">Members:40</h3>
     </div>
     </div>
  </>
  );
}

export default Event;