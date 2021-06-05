import React,{useContext} from 'react';
import {Grid,makeStyles} from '@material-ui/core'
import BlogContext from '../../../Store/Blog-context';
import Card from '../../UI/BCard'
import MeCard from '../../UI/MeCard';


import classes from'./BlogList.module.css'
import Featured from '../Featured/featured';
import FeaturedItem from '../Featured/featuredItem';
import FeaturedList from '../Featured/featured';
const BlogList=()=>{
 // const  classes=useStyles();
const context = useContext(BlogContext)

     const OutBlogList=context.myBlogs.map((blawg)=><Grid item><Card 
     title={blawg.name}
    imageLink={blawg.imageLink}
    hashtags={blawg.hashtag}
    date={blawg.date}
     /></Grid>)
    return< >
  <div className={classes.main}>
    <Grid container>
      <Grid item>
      <Grid container spacing={0} className={classes.root} >
    {OutBlogList}  
  </Grid>
      </Grid>
      <Grid item className={classes.mCard}>
  <MeCard heading={"Featured Posts"} className={classes.Featured}>
  <FeaturedList
  Blogs={context.myBlogs}
  number={4}
  />
  </MeCard>
  <MeCard heading={"Popular Tags"}>

</MeCard>

<MeCard heading={"About Me"}>

</MeCard>
  </Grid>
    </Grid>
  
  
  </div>
 
  
  
       
    
    
    
    </>
}

export default BlogList