import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";
import { addBlog } from "../../Store/api";
import useHttp from "../../Store/use-http";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
      "@media (min-width:780px)": {
        width: 800,
      },
    },
  },
  main: {
    textAlign: "center",
    marginTop: 50,
  },
  button: {
    margin: 20,
    fontSize: 20,
    color: "white",
    backgroundColor: "#fc0591",
    "&:hover": {
      backgroundColor: "",
      color: "#fc0591",
    },
  },
  head: {
    fontSize: 40,
  },
  hashtags: {
    maxWidth: 20,
  },
}));
const CreateBlog = () => {
  const { sendRequest, status } = useHttp(addBlog);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/home");
    }
  }, [status, history]);

  const classes = useStyles();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [imageLink, setImageLink] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const TitlehandleChange = (event) => {
    setTitle(event.target.value);
  };

  const Imagehandler = (event) => {
    setImageLink(event.target.value);
  };

  const hashtagsHandler = (event) => {
    const hello = event.target.value;
    const hTag = hello.split(" ");
    setHashtags(hTag);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const htags = hashtags.map((ht) => "#" + ht);
    console.log("lol");
    const Blog = {
      //id:Math.random(),
      name: title,
      content: `${value}`,
      imageLink: imageLink,
      hashtag: htags,
      Likes: 0,
      date: new Date(),
    };

    sendRequest(Blog);
    console.log(Blog);
  };
  return (
    <div className={classes.main}>
      <h1 className={classes.head}>Let's Write</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitHandler}
      >
        <TextField
          id="outlined-multiline-static"
          label="Title"
          size="Small"
          variant="outlined"
          onChange={TitlehandleChange}
          value={title}
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          value={value}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="ImageLink"
          variant="outlined"
          onChange={Imagehandler}
        />
        <TextField
          label="hashtags(don't use # use space for diffrent hashtag) "
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
          }}
          variant="outlined"
          onChange={hashtagsHandler}
        />

        <div>
          <Button
            variant="outlined"
            className={classes.button}
            type="submit"
            color="secondary"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
