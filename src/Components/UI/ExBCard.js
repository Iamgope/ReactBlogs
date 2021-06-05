import {Card,Typography,CardMedia,CardContent,CardActions,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BDate from './BDate';
import {Link} from 'react-router-dom'
const useStyles=makeStyles({
    root:{
       
        maxWidth:800,
            padding:20,
             position:"relative",
      
    },
    media: {
    
        '@media (min-width:780px)':{
            width:700,
        },
      
       height:600,
      
       borderRadius:0,

     
      },
      title:{
          fontSize:38,
          fontWeight:620,
          fontFamily:"Arial , sans-serrif",
      },
      hashtag:{
          color:"#fc0591",
          fontWeight:650,
          fontFamily:"Arial",
          fontSize:15,
          
      },
      content: {
        position: 'absolute',
        top: 0,
        width: '90%',
        zIndex: 1,
        padding: '1.2rem 1.5rem 1rem',
        marginTop:-50,
      },
   


})

const ExBCard=(props)=>{
    const classes=useStyles()
    let htags=props.Blog.hashtag.map((ht)=>ht+' ')
    //console.log(props.date)
    const month=props.Blog.date.toLocaleString('en-US',{month:'short'});
    const year = props.Blog.date.getFullYear().toString().substr(-2);;
    const day=props.Blog.date.toLocaleString('en-US',{day:'2-digit'});
    const content=props.Blog.content.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return <Card className={classes.root} elevation={0}>
    <CardContent>  
       <Typography className={classes.title} color="textPrimary" >
        {props.Blog.name}
       </Typography>
       
       </CardContent>
        <CardMedia
          className={classes.media}
          image={props.Blog.imageLink}
          title="my image"
        />
        <Typography>
           {content}
       </Typography>
       <Typography className={classes.hashtag} color="textPrimary">
        {htags}
       </Typography>

       

  </Card>
} 

export default ExBCard;