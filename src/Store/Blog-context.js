import React from 'react'

const BlogContext=React.createContext({

    myBlogs:[],
    featuredBlog:[],
    konsa:0,
    addBlog:(blog)=>{},
    onLike:(id,addNo)=>{}


})

export default BlogContext;