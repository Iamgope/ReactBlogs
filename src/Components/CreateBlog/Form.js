import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BlogContext from '../../Store/Blog-context'
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:200,
        marginLeft:100,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100ch',
      
      },
      
    },
  }));
const CreateBlog=()=>{

const context = useContext(BlogContext);




    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [title,setTitle]=React.useState('');
    const handleChange = (event) => {
       
        setValue(event.target.value);

      };
      const TitlehandleChange = (event) => {
       
        setTitle(event.target.value);

      };

const onSubmitHandler=(event)=>{
    event.preventDefault();
    const Blog={
        id:Math.random(),
        name:title,
        content:`${value}`,
        hashtags:["#hello","#notYou","Pyar_dhokha_hai"],
        imageLink:"Link",
        Likes:0,

    }

    context.addBlog(Blog);

}
  return(
<Grid xs={10}>
<form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
     <TextField
          id="outlined-multiline-static"
          label="Title"
          variant="outlined"
          onChange={TitlehandleChange}
          value={title}
    />
      <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          value={value}
          variant="outlined"
          onChange={handleChange}
        />
         
        <button>Submit</button>
</form>

</Grid>

  )
}

export default CreateBlog;