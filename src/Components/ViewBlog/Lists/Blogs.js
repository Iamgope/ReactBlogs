import {Card} from '@material-ui/core'
import BlogList from './BlogList'
import classes from "./Blogs.module.css";
const Blogs=(props)=>{
    return <Card className={classes.card}>
       <BlogList blogs={props.Blogs}/>
    </Card>
}

export default Blogs;