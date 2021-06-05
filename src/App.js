import React from "react";
import "./App.css";
//import Navbar from "./Components/Header/Navbar";
import Featured from "./Components/ViewBlog/Featured/featured";
import Blogs from "./Components/ViewBlog/Lists/Blogs";
import CreateBlog from "./Components/CreateBlog/Form";
import BlogProvider from "./Store/Blog-provider";
import { Route, Switch,Redirect } from "react-router-dom";
import ExpandedBlog from "./Components/ViewBlog/Lists/Blog";
import Intro from "./Components/Intro";
import Header from "./Components/Header/Header";
import BCard from "./Components/UI/BCard";
import MeCard from "./Components/UI/MeCard";
import BlogList from "./Components/ViewBlog/Lists/BlogList";
import BDate from "./Components/UI/BDate";
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
