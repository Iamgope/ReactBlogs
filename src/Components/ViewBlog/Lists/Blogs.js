import {Card,Paper} from '@material-ui/core'
import BlogList from './BlogList'
import classes from "./Blogs.module.css";
const Blogs=(props)=>{
    return <Paper elevation={0} className={classes.card}>
       <BlogList blogs={props.Blogs}/>
    </Paper>
}

export default Blogs;