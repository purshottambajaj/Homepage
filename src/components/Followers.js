import React from 'react';
import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpg';
import p4 from '../img/p4.jpg';
import p5 from '../img/p5.jpg';

function FollowerPage() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w'>
      <h2 className="text-lg font-bold mb-2">Followers</h2>
      <hr />
      <div className="grid grid-cols-4 gap-4">
        <img src={p1} alt="Follower 1" className="rounded-full h-20 w-20 object-cover" />
        <img src={p2} alt="Follower 2" className="rounded-full h-20 w-20 object-cover" />
        <img src={p3} alt="Follower 3" className="rounded-full h-20 w-20 object-cover" />
        <img src={p4} alt="Follower 4" className="rounded-full h-20 w-20 object-cover" />
        <img src={p5} alt="Follower 5" className="rounded-full h-20 w-20 object-cover" />
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">See All</a>
      </div>
    </div>
  );
}

export default FollowerPage;