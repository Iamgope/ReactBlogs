import { Card, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  media: {
    width: 80,
    height: 110,
    borderRadius: 0,
  },

  content: {
    width: 250,
    maxHeight: 150,
    fontWeight: 700,
    fontFamily: "Arial,san-serrif",
    fontSize: 20,
    color: "Black",
    marginTop: 10,
    "&:hover": {
      color: "#6c05fc",
    },
  },

  hashtags: {
    fontWeight: 700,
    fontFamily: "Arial,san-serrif",
    fontSize: 15,
    color: "#fc0591",
    "&:hover": {
      color: "#6c05fc",
    },
    display: "inline",
    textAlign: "left",
    margin: 5,
  },

  lists: {
    marginLeft: -10,
  },
  Link: {
    textDecoration: "none",
  },
}));
const FeaturedItem = (props) => {
  const classes = useStyles();
  const hashtags = props.Blog.hashtag.map((ht) => (
    <li className={classes.hashtags}>{ht}</li>
  ));
  return (
    <>
      <div style={{ width: "100%" }} className={classes.root}>
        <Box display="flex" p={1} bgcolor="background.paper">
          <Box p={1} order={1}>
            <Card>
              <CardMedia
                className={classes.media}
                image={props.Blog.imageLink}
              />
            </Card>
          </Box>
          <Box p={1} order={2}>
            <Link to={`/Blogs/${props.Blog.id}`} className={classes.Link} exact>
              {" "}
              <h1 className={classes.content}>{props.Blog.name}</h1>
            </Link>
            <div className={classes.lists}>{hashtags}</div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default FeaturedItem;
