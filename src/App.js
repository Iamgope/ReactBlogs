import React from "react";
import "./App.css";
import CreateBlog from "./Components/CreateBlog/Form";
import BlogProvider from "./Store/Blog-provider";
import { Route, Switch,Redirect } from "react-router-dom";
import ExpandedBlog from "./Components/ViewBlog/Lists/Blog";
import Header from "./Components/Header/Header";
import OutBlogs from "./Components/ViewBlog/Lists/OutBlog";
function App() {
  return (
    <Switch>
      <BlogProvider>
        <Route path='/' exact>
        <Redirect to='/home'/>
        </Route>
        <Header/> 

    <Route path="/Home" exact>
     
     <OutBlogs/>
     </Route>
      <Route path="/Blogs/:blogId">
       <ExpandedBlog/>
      </Route>
    

      <Route path="/Create" exact>
      <CreateBlog/>
      </Route>
      
      </BlogProvider>
    </Switch>
  );
}

export default App;
