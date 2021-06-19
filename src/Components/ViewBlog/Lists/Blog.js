import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FoF from "../../UI/Fourofour";
import ExBCard from "../../UI/ExBCard";
import BlogList from "./BlogList";
import { getSingleBlog } from "../../../Store/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
import useHttp from "../../../Store/use-http";
const ExpandedBlog = (props) => {
  const params = useParams();
  const { blogId } = params;

  const {
    sendRequest,
    status,
    data: loadedBlog,
    error,
  } = useHttp(getSingleBlog, true);
  useEffect(() => {
    sendRequest(blogId);
  }, [sendRequest, blogId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedBlog) {
    return <p>No Blog found!</p>;
  }
  const Blog = loadedBlog;
  return (
    <article>
      <BlogList>
        <ExBCard
          key={Blog.id}
          Blog={Blog}
          headLine={""}
          date={new Date(Blog.date)}
        />
      </BlogList>
    </article>
  );
};

export default ExpandedBlog;
