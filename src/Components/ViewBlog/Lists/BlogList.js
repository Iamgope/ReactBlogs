import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import MeCard from "../../UI/MeCard";
import classes from "./BlogList.module.css";
import FeaturedList from "../SideLists/featured";
import PHtags from "../SideLists/PopTags";
import { useLocation } from "react-router-dom";
import OutBlogs from "./OutBlog";
import useHttp from "../../../Store/use-http";
import { getAllBlogs } from "../../../Store/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
const BlogList = (props) => {
  const location = useLocation();
  const {
    sendRequest,
    status,
    data: loadedBlogs,
    error,
  } = useHttp(getAllBlogs, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedBlogs || loadedBlogs.length === 0)) {
    return <h1>No Blogs here</h1>;
  }

  // const  classes=useStyles();

  return (
    <>
      <div className={classes.main}>
        <Grid container>
          <Grid item className={classes.heading}>
            <div></div>
            <h1 className={classes.headLine}>{props.headLine}</h1>
            <Grid container spacing={0} className={classes.root}>
              {location.pathname === "/home" ? (
                <OutBlogs loadedBlogs={loadedBlogs} />
              ) : (
                props.children
              )}
            </Grid>
          </Grid>
          <Grid item className={classes.mCard}>
            <MeCard heading={"Featured Posts"} className={classes.Featured}>
              <FeaturedList number={4} Blogs={loadedBlogs} />
            </MeCard>
            <MeCard heading={"Popular Tags"}>
              <PHtags Blogs={loadedBlogs} />
            </MeCard>

            <MeCard heading={"About Me"}></MeCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BlogList;
