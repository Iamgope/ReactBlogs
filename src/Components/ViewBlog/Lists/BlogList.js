import React,{useContext} from 'react';
import {Grid} from '@material-ui/core'
import BlogContext from '../../../Store/Blog-context';
import Card from '../../UI/BCard'
import MeCard from '../../UI/MeCard';
import classes from'./BlogList.module.css'
import FeaturedList from '../SideLists/featured';
import PHtags from '../SideLists/PopTags';
const BlogList=(props)=>{
 // const  classes=useStyles();
const context = useContext(BlogContext)

    return< >
  <div className={classes.main}>
    <Grid container>
      <Grid item>
    <Grid container spacing={0} className={classes.root} >
    {props.children}
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
<PHtags/>
</MeCard>

<MeCard heading={"About Me"}>

</MeCard>
  </Grid>
    </Grid>
  
  
  </div>
 
  
  
       
    
    
    
    </>
}

export default BlogList