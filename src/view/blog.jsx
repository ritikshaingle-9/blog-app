import React from 'react'
import blogsData from './../Data/blog.json'
import BlogCard from '../component/blogCard';

function Blog() {
  return (
    <div>
        <h1 className='text-center text-5xl mt-7'>Welcome to my blog</h1>
        {blogsData.map((blogDetailObject)=>{
        const {id,Title,Keyword,Author,Content,Thumbnail,}=blogDetailObject;

        return(
            <BlogCard 
            key={id} 
            id={id}
            Title={Title} 
            Keyword={Keyword}
            Author={Author} 
            Content={Content} 
            Thumbnail={Thumbnail}
            />
        );
    })}</div>
  )
}

export default Blog