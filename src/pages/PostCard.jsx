import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Header */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/images/default-post.jpg';
          }}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">
          {post.description}
        </p>
        <div className="flex space-x-4">
          <Link 
            to={post.readMoreLink}
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;