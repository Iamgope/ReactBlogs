import FeaturedItem from "./featuredItem";
import {Paper} from '@material-ui/core'
const FeaturedList=(props)=>{

let size=props.number;
if(props.Blogs.length<props.number){
  size=props.Blogs.length;
}
const Flists=[]
let i=0
for(i=0;i<size;i++){
  Flists.push(<FeaturedItem
          key={props.Blogs[i].id}
          Blog={props.Blogs[i]}
  />)
}



   return <Paper>
    {Flists}
   </Paper>
}

export default FeaturedList;