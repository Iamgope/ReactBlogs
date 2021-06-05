import {useContext} from 'react';
import BlogContext from '../../../Store/Blog-context';
import Card from '../../UI/BCard'
import {Grid} from '@material-ui/core'
import BlogList from './BlogList';


const OutBlogs=()=>{
    const context = useContext(BlogContext)

    const OutBlogList=context.myBlogs.map((blawg)=><Grid item><Card 
    title={blawg.name}
    imageLink={blawg.imageLink}
    hashtags={blawg.hashtag}
    date={blawg.date}
    id={blawg.id}
    /></Grid>)

    return<><BlogList>{OutBlogList}</BlogList></>
}

export default OutBlogs;
