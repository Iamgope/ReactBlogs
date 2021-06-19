import { Card, Typography, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    padding: 20,
    position: "relative",
  },
  media: {
    "@media (min-width:780px)": {
      width: 700,
    },

    height: 600,

    borderRadius: 0,
  },
  title: {
    fontSize: 38,
    fontWeight: 620,
    fontFamily: "Arial , sans-serrif",
  },
  hashtag: {
    color: "#fc0591",
    fontWeight: 650,
    fontFamily: "Arial",
    fontSize: 15,
  },
  contents: {
    color: "black",
    fontWeight: 500,
  },
  date: {
    fontSize: 20,
    fontWeight: 100,
    color: "gray",
  },
});

const ExBCard = (props) => {
  const classes = useStyles();
  const date = props.date;
  let htags = props.Blog.hashtag.map((ht) => ht + " ");
  //console.log(props.date)
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear().toString().substr(-2);
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const content = props.Blog.content
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary">
          {props.Blog.name}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={props.Blog.imageLink}
        title="my image"
      />
      <h4 className={classes.date}>{`${month} ${day} ${year}`}</h4>

      <Typography className={classes.contents}>{content}</Typography>
      <Typography className={classes.hashtag} color="textPrimary">
        {htags}
      </Typography>
    </Card>
  );
};

export default ExBCard;
