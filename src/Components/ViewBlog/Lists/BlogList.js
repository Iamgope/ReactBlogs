import React,{useContext} from 'react';
import BlogOut from "./BlogOut"
import {Grid} from '@material-ui/core'
import BlogContext from '../../../Store/Blog-context';

const BlogList=()=>{
const context = useContext(BlogContext)

     const OutBlogList=context.myBlogs.map((Blog)=><Grid item><BlogOut blawg={Blog} /></Grid>)
    return<React.Fragment >
        
    <Grid  container spacing={10}>
        {OutBlogList}
    </Grid>
    
    
    </React.Fragment>
}

export default BlogList