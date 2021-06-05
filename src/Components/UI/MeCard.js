import {Card,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
    root:{
        width:400,
        marginTop:20,
    },
    Aboutme:{
        backgroundColor:"#6c05fc",
        padding:13,
        color:"white",
        fontWeight:700,
        fontFamily:"Arial,san-serrif",
        fontSize:20
    }
  
})
const MeCard=(props)=>{
   
    const classes=useStyles();
    
    return <Card className={classes.root}>
       <Typography className={classes.Aboutme}>
           {props.heading}
       </Typography>
       <div>{props.children}</div>
       
      
    </Card>
}

export default MeCard;