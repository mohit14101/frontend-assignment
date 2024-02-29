
import React from 'react';
import blogPosts from '../Assets/blogPosts'
const BlogsSection = () => {
  return (
    <div className=" bg-gray-100 py-12">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
        <div className='flex flex-wrap gap-3'>
        {blogPosts.map((post, index) => (
          <div key={index} className=" flex flex-col max-w-screen-md mx-auto mb-8 p-6 bg-white rounded-md shadow-lg}">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <a href={post.link} target="_blank" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
