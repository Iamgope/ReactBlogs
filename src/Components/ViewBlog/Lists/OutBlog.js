import Card from "../../UI/BCard";
import { Grid } from "@material-ui/core";

const OutBlogs = (props) => {
  //const context = useContext(BlogContext)

  const OutBlogList = props.loadedBlogs.map((blawg) => (
    <Grid item>
      <Card
        title={blawg.name}
        imageLink={blawg.imageLink}
        hashtags={blawg.hashtag}
        date={new Date(blawg.date)}
        id={blawg.id}
        key={blawg.id}
      />
    </Grid>
  ));

  return <>{OutBlogList}</>;
};

export default OutBlogs;
