import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import logo from '../img/logo.jpg'; 

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      icon: logo,
      name: 'Project A'
    },
    {
      icon: logo,
      name: 'Project B'
    },
    // Add more projects here
  ];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w'>
       <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Projects</h2>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2">New Project</button>
      </div>
     <hr />
      <div className="flex-row gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center p-2 border rounded-md">
            <img src={project.icon} alt={project.name} className="h-12 w-12 mr-4" />
            <div>
              <h3 className="text-md font-semibold">{project.name}</h3>
              <Menu as="div" className="relative inline-block text-end">
                <Menu.Button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c1.172-1.171 3.071-1.171 4.243 0l7.938 7.938c1.172 1.172 1.172 3.071 0 4.243L18.369 21.635c-1.172 1.172-3.071 1.172-4.243 0L7.082 14.559c-1.172-1.172-1.172-3.071 0-4.243l7.938-7.938z" />
                  </svg>
                </Menu.Button>
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <Menu.Item>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleProjectSelect(project)}>Select</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Selected Project: {selectedProject.name}</h3>
          {/* Add project details here */}
        </div>
      )}
    </div>
    
  );
}

export default Project;