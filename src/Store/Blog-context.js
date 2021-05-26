import React from 'react'

const BlogContext=React.createContext({

    myBlogs:[],
    addBlog:(blog)=>{},

})

export default BlogContext;