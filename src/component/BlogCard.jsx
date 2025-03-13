import React from 'react'
import { Link } from 'react-router';

function BlogCard({id,Title,Keyword,Author,Content,Thumbnail}) {
  return (
    <Link to={`/read/${id}`}>
    <div className='cursor-pointer'>
        <h1 className='text-2xl border-1 my-3'>{Title}</h1>
    </div>
    </Link>
  );
}

export default BlogCard