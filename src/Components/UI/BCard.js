import {Card,Typography,CardMedia,CardContent,CardActions,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BDate from './BDate';
import {Link} from 'react-router-dom'
const useStyles=makeStyles({
    root:{
       maxWidth:370,
      margin:15 ,
       position:"relative",
    },
    media: {
       height:450,
      
       borderRadius:0,

     
      },
      title:{
          fontSize:32,
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
      }

})

const BCard=(props)=>{
    const classes=useStyles()
    let htags=props.hashtags.map((ht)=>ht+' ')
    console.log(props.date)
  return <Card className={classes.root} elevation={0}>
   
        <CardMedia
          className={classes.media}
          image={props.imageLink}
          title="my image"
        />
        <div className={classes.content}>
         <div className={classes.dates}>
         <BDate date={props.date}/>

         </div>
        </div>

        <CardContent>
       
        <Typography className={classes.hashtag} color="textPrimary">
         {htags}
        </Typography>
        <Typography className={classes.title} color="textPrimary" >
         {props.title}
        </Typography>
        </CardContent>

        <CardActions>
      <Link to ={`Blogs/${props.id}`}> <Button size="small">Read More..</Button></Link> 
      </CardActions>
       

  </Card>
} 

export default BCard;