import Navbar from "./Navbar";
import {Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor:"#e1e6eb",
      padding: theme.spacing(1),
      fontSize:60,
      fontWeight:500,
      textAlign:"center",
      color:"#4802f7",
      fontFamily:"Arial ,sans-serif"
    },
  }));
const Header=()=>{
    const classes = useStyles();
   return <><Navbar/>
    <Container>
    <div className={classes.root}>{"Bloggy"}</div>

    </Container>
    
   </>

}
export default Header;