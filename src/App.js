import React , {} from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar'
import Featured from './Components/ViewBlog/Featured/featured'
import Blogs from './Components/ViewBlog/Lists/Blogs';
import CreateBlog from './Components/CreateBlog/Form';
import BlogProvider from './Store/Blog-provider';
function App() {

  return (
   <BlogProvider>

<Navbar/>

{/* <section>
<Form onAddBlog={onAddBlogHandler}/>
</section> */}


  <Featured/>
 

<Blogs />

<CreateBlog />

   </BlogProvider>
   
  
  );
}

export default App;
