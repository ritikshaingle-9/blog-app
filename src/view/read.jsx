import { useEffect, useState } from "react";
import { useParams } from "react-router"
import blogJsonData from "./../Data/blog.json"

export default function Read() {
const {id} = useParams();

const [blogData, setBlogData]= useState({
  id:"",
  Title:"",
  Author: "",
  Keywords:[],
  Thumbnails: "",
  Content:"", 
});

useEffect(()=>{
  const blog = blogJsonData.find((blog)=> blog.id===id);
  setBlogData(blog);
}, [id]);
  return (
    <div>
      <h1>{blogData.Title}</h1>
      <img src={blogData.Thumbnails}></img>
      </div>
  );
}

