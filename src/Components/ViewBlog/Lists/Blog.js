import React,{useContext} from 'react';
import BlogContext from '../../../Store/Blog-context'
import {useParams} from 'react-router-dom';
import FoF from '../../UI/Fourofour';
import ExBCard from '../../UI/ExBCard'
import BlogList from './BlogList';
const ExpandedBlog=(props)=>{
 const val=useParams();
  const context = useContext(BlogContext);
  const index=context.myBlogs.findIndex((blog)=>blog.id===val.blogId);
  if(index===-1) return<FoF/>
  const Blog =context.myBlogs[index]
  return<article>
    <BlogList>
    <ExBCard
 key={Blog.id}
 Blog={Blog}
 />
    </BlogList>

  </article>
}

export default ExpandedBlog;