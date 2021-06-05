
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles({
    root:{
        height:70,
        maxWidth:100,
        backgroundColor:"#6c05fc", 
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        marginTop:50,
        '&:hover': {
            backgroundColor:'#fc0591'
        }
        
    },



})

const BDate=(props)=>{
  const classes=useStyles();
   

    return<>
      <div className={classes.root} >
          {props.children}
      
      </div>
    </>
}

export default BDate;