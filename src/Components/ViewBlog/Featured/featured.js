import React,{useContext} from 'react';
import Card from '@material-ui/core/Card'
import classes from './featured.module.css'
import FeaturedItem from './featuredItem'
import Bimg from '../../../Gallery/List04.jpg'
import BlogContext from '../../../Store/Blog-context'
const Featured = () => {
  const context = useContext(BlogContext)
    const FeaturedList = context.myBlogs.map((blog) => (
      <FeaturedItem
        id={blog.id}
        key={blog.id}
        name={blog.name}
        content={blog.content}
        hashtags={blog.hashtag}
      />
    ));
  
    return (
        <div 
         style={{
             backgroundImage:`url(${Bimg})`
            
         }}
         className={classes.main}
        >
  <section className={classes.blogs}>
        <Card className={classes.card}>
          <h2>Featured Posts</h2>
          <hr/>
          <ul>{FeaturedList}</ul>
        </Card>
      </section>

     
        </div>
    
    );
  };

export default Featured;