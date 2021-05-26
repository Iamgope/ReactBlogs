import Classes from './featuredItem.module.css'
import Grid from '@material-ui/core/Grid'
import img from '../../../Gallery/image.jpg'
import GiveDate from '../GiveDate'
const FeaturedItem=(props)=>{

   
    // const hashtag1=props.hashtags[0];
    // const hashtag2=props.hashtags[1];
    return <li className={Classes.featured}>
        <Grid container spacing={2}>
        <Grid item xs={2}>
           
        </Grid>

            <Grid item xs={10}>
             <h3>{props.name}</h3>
            </Grid>
            <div className={Classes.description}>{props.content}</div>
            {/* <Grid item xs={12}>
             <p>{hashtag1} {hashtag2}</p>
            </Grid> */}
          
            
       </Grid>
      
     
    </li>
}
export default FeaturedItem;