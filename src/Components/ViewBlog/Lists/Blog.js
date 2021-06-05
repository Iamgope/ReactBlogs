import React,{useContext} from 'react';
import Img from '../../../static/image.jpg';
import classes from './Blog.module.css';
import {Card,CardMedia,Grid,} from '@material-ui/core'
import BlogContext from '../../../Store/Blog-context'
import {useParams} from 'react-router-dom';
const ExpandedBlog=(props)=>{
 const val=useParams();
  const context = useContext(BlogContext);
  const index=context.myBlogs.findIndex((blog)=>blog.id===val.blogId);
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