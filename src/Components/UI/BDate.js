
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles({
    root:{
        height:70,
        width:75,
        backgroundColor:"#6c05fc", 
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        marginTop:50
        
    },
    day:{
        color:"white",
        fontFamily:"Arial, sans-seriff",
        fontWeight:700,
        fontSize:30,
        marginLeft:2
        

    },
    MandY:{
        color:"white",
        fontFamily:"Arial, sans-seriff",
        fontWeight:400,
        marginTop:-30,
        
    }


})

const BDate=(props)=>{
  const classes=useStyles();
    const month=props.date.toLocaleString('en-US',{month:'short'});
    const year = props.date.getFullYear().toString().substr(-2);;
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return<>
      <div className={classes.root} >
       <h2 className={classes.day}>{day}</h2>
       <h3 className={classes.MandY}>{month + ' ' + '/' + ' '+year}</h3>
      </div>
    </>
}

export default BDate;