import React from "react";
import "./App.css";
import CreateBlog from "./Components/CreateBlog/Form";
import BlogProvider from "./Store/Blog-provider";
import { Route, Switch,Redirect } from "react-router-dom";
import ExpandedBlog from "./Components/ViewBlog/Lists/Blog";
import Header from "./Components/Header/Header";
import BlogList from "./Components/ViewBlog/Lists/BlogList";
function App() {
  return (
    <Switch>
      <BlogProvider>
        <Route path='/' exact>
        <Redirect to='/home'/>
        </Route>
        <Header/> 
    <Route path="/Home" exact>
    <BlogList/>
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
