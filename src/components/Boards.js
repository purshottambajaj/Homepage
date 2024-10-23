import React from 'react';
import logo from '../img/logo.jpg'; 

const Boards = () => {

    const contacts = [
      {
        image: logo,
        name: '3315',
      },
      {
        image: logo,
        name: 'Jane ',
      },
      // Add more contacts here
    ];
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w'>
      <div className='flex justify-between'> 
      <h2 className="text-lg font-bold mb-2">Board</h2>
      <button className="bg-blue-500 text-white rounded-md px-3 py-2 mb-4 ">New Board</button>
      </div>
      <hr />
      <ul className="list-none">
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-center py-2">
            <img src={contact.image} alt={contact.name} className="h-12 w-12 rounded-full mr-4" />
            <div>
              <h3 className="text-md font-semibold">{contact.name}</h3>
             </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Boards