import Img from '../../../Gallery/image.jpg';
import classes from './Blog.module.css';
import {Card,CardMedia,Grid,} from '@material-ui/core'
const ExpandedBlog=(props)=>{
  return<>
 
 <h1 className={classes.title}>{props.Blawg.name}</h1>
<hr/>


<Card className={classes.root}>
   

<CardMedia
  className={classes.media}
  image={Img}
/>
<div className={classes.blogPost}>
{props.Blawg.content}
</div>


</Card>


 
 
  </>
}

export default ExpandedBlog;