import {useContext} from 'react';
import BlogContext from '../../../Store/Blog-context';
import {Grid,makeStyles} from '@material-ui/core'
const comp_tags=(a,b)=>{
  if(a.count<b.count) return 1;
  else if(a.count>b.count) return -1;
  else return 0;
}

const useStyles=makeStyles({
    text:{
        color: '#fc0591', 
         fontFamily:'Arial, sans-serrif',

        '&:hover': {
            color:"#6c05fc"
        },
        fontSize:15,
        
        
    },
    root:{
        margin:'auto'
    }



})
const PHtags=()=>{
    const classes=useStyles();
   const context = useContext(BlogContext);
    let tags=[];
    for(const Blog of context.myBlogs){
        const hashtags=Blog.hashtag;
        for(const ht of hashtags){
            const index=tags.findIndex((htgs)=>htgs.name===ht);
            if(index===-1){
                tags.push({
                    name:ht,
                    count:1
                })
            }
            else{
                tags[index].count+=1;   
            }
        }
    }
tags.sort(comp_tags);
const val=tags.map((htag)=><Grid item className={classes.text}><h3>{htag.name}</h3></Grid>)
    return <Grid container spacing={2} className={classes.root}>{val}</Grid>
}

export default PHtags;