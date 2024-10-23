import React, { useState } from 'react';
import p1 from '../img/p1.jpg';

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profileImage: p1,
      profileName: 'John Doe',
      date: '2024-10-20 12:00',
      description: 'This is a sample post description.',
      likes: 0,
      comments: 5,
      followers: 20,
    },
    {
      id: 2,
      profileImage: p1,
      profileName: 'Jane Smith',
      date: '2024-10-21 14:00',
      description: 'Another sample post description here.',
      likes: 2,
      comments: 3,
      followers: 15,
    },
    {
      id: 3,
      profileImage: p1,
      profileName: 'Alice Johnson',
      date: '2024-10-22 16:00',
      description: 'Yet another post to demonstrate the feed.',
      likes: 5,
      comments: 8,
      followers: 25,
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [updatePostId, setUpdatePostId] = useState(null);
  const [updateContent, setUpdateContent] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: Date.now(),
        profileImage: p1,
        profileName: 'New User',
        date: new Date().toISOString(),
        description: newPost,
        likes: 0,
        comments: 0,
        followers: 0,
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  const handleUpdatePost = () => {
    setPosts(posts.map(post => (post.id === updatePostId ? { ...post, description: updateContent } : post)));
    setUpdatePostId(null);
    setUpdateContent('');
    setModalOpen(false);
  };

  const handleExpandPost = (post) => {
    setSelectedPost(post);
    setDetailModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      {/* Input Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border rounded-md p-2 mb-4"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addPost}
        >
          Post
        </button>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w">
          <div className="flex items-center mb-2">
            <img src={post.profileImage} alt="Profile" className="rounded-full h-20 w-20 object-cover mr-4" />
            <div>
              <div className="font-semibold">{post.profileName}</div>
              <div className="text-gray-500 text-sm">{post.date}</div>
            </div>
            <button
              className="ml-auto text-blue-500"
              onClick={() => {
                setUpdatePostId(post.id);
                setUpdateContent(post.description);
                setModalOpen(true);
              }}
            >
              Update
            </button>
          </div>
          <div className="mb-2">{post.description.slice(0, 50)}...</div>
          <button
            className="text-blue-500"
            onClick={() => handleExpandPost(post)}
          >
            Expand
          </button>
          <div className="mt-2">
            <button className="text-red-500 mr-4">❤️ {post.likes}</button>
            <span className="text-gray-500">{post.comments} comments</span>
          </div>
        </div>
      ))}

      {/* Update Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-lg font-bold mb-4">Update Post</h2>
            <textarea
              value={updateContent}
              onChange={(e) => setUpdateContent(e.target.value)}
              className="w-full border rounded-md p-2 mb-4"
            />
            <div className="flex justify-between">
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleUpdatePost}
              >
                Save
              </button>
              <button
                className="p-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Post Detail Modal */}
      {detailModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-lg font-bold mb-4">{selectedPost.profileName}</h2>
            <div className="mb-2">{selectedPost.description}</div>
            <div className="mb-4">{selectedPost.date}</div>
            <div className="flex justify-between">
              <button
                className="p-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setDetailModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedPage;
