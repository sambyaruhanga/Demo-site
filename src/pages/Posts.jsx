
import React from 'react';
import PostCard from './PostCard';
import postsData from './posts.json';

const Posts = () => {
  return (
   <section id="Posts" class="bg-gray-50 w-full h-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 ">My <span class="gradient-text">Blog</span></h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                <p class="text-2xl text-gray-600 max-w-2xl mx-auto mt-4">Sharing my knowledge and experiences in Data Science and Web Development</p>
            </div>
            
            <div class="w-full h-full grid  grid-cols-1 md:grid-cols-3 gap-8 ml-4 lg:ml-8">
              
              {postsData.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
            
            </div>
        </div>
      </section>
  );
};

export default Posts;