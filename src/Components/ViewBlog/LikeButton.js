import {useState,useContext} from 'react'
import {Card} from '@material-ui/core'
import classes from './LikeButton.module.css'
import BlogContext from '../../Store/Blog-context'
const LikeButton=(props)=>{
    const context = useContext(BlogContext);
    const [curr,setCurr]=useState(false);
    const onClickHandler=(event)=>{
        event.preventDefault();
        //console.log(event.target);
     setCurr((prevState)=>(!prevState))
     console.log(curr);
     if(!curr)
     context.onLike(props.id,+1)
     else
     context.onLike(props.id,-1) 
    }
    return <i className={`${classes.btn_like} ${curr && classes.liked}`} onClick={onClickHandler}></i>

 
  
  
}

export default LikeButton;