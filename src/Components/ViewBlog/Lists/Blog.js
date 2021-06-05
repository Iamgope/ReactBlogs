import React,{useContext} from 'react';
import classes from './Blog.module.css';
import {Card,CardMedia} from '@material-ui/core'
import BlogContext from '../../../Store/Blog-context'
import {useParams} from 'react-router-dom';
import FoF from '../../UI/Fourofour';
const ExpandedBlog=(props)=>{
 const val=useParams();
  const context = useContext(BlogContext);
  const index=context.myBlogs.findIndex((blog)=>blog.id===val.blogId);
  if(index===-1) return<FoF/>
  const Blawg=context.myBlogs[index];
  return<article>
 
 <h1 className={classes.title}>{Blawg.name}</h1>
<hr/>


<Card className={classes.root}>
   

<CardMedia
  className={classes.media}
  image={Blawg.imageLink}
/>
<div className={classes.blogPost}>
{Blawg.content.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
</div>
</Card>
  </article>
}

export default ExpandedBlog;