import {Container,Grid} from '@material-ui/core'
import classes from './intro.module.css'
const Intro=()=>{

return(
    <Grid className={classes.Intro} container>
        <Grid item>
        <h1> Welcome To Blogg...</h1>
       <p>
           A dedicated wep app for writing and sharing your blogs and articles
       </p>
        </Grid>
        <Grid item>
          <i src="../static/intro-img.svg" alt="imagehai"></i>
        </Grid>
     
    </Grid>
)


}

export default Intro;