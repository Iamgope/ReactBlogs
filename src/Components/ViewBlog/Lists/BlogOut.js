import {Card,CardMedia,makeStyles,CardContent,Typography} from '@material-ui/core'
import img from "../../../Gallery/image.jpg";
import GiveDate from '../GiveDate'
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      borderRadius:20,
      padding:10,
        },
    media: {
      height: 400,
      marginTop:-100
     
    },
    date:{
         
    }
  
  });
  
const BlogOut=(props)=>{

    const date=<GiveDate date={new Date(2020,10,0)}/>
        
    const classes = useStyles();
  return<>
    <Card className={classes.root}>
    <div className={classes.date}>
          {date}
    </div> 
      <CardMedia
     className={classes.media}
     image={img}
     title="Contemplative Reptile"
     />
   
     
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         {props.blawg.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.blawg.content}
          </Typography>
        </CardContent>
    </Card>
  </>
}

export default BlogOut