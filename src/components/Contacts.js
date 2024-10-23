import React from 'react';
import logo from '../img/logo.jpg'; 

function Contacts() {
  const contacts = [
    {
      image: logo,
      name: 'John Doe',
      number: '123-456-7890',
      unreadMessages: 3
    },
    {
      image: logo,
      name: 'Jane Smith',
      number: '987-654-3210',
      unreadMessages: 0
    },
    // Add more contacts here
  ];

  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w'>
      <div className='flex justify-between'> 
      <h2 className="text-lg font-bold mb-2">Contacts</h2>
      <button className="bg-blue-500 text-white rounded-md px-3 py-2 mb-4 ">Add Contact</button>
      </div>
      <hr />
      <ul className="list-none">
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-center py-2">
            <img src={contact.image} alt={contact.name} className="h-12 w-12 rounded-full mr-4" />
            <div>
              <h3 className="text-md font-semibold">{contact.name}</h3>
              <p className="text-gray-500">{contact.number}</p>
              {contact.unreadMessages > 0 && (
                <span className="inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-2">{contact.unreadMessages}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;