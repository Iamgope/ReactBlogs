import React,{useReducer} from 'react';
import BlogContext from './Blog-context';


const defaultBlogsState={
    myBlogs:[

        {
            id:'first',
            name:'Learn React in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://images.app.goo.gl/7dSQp2rb94pHWSuCA',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:0
          },
          {
            id:'second',
            name:'Crack Jee in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://images.app.goo.gl/7dSQp2rb94pHWSuCA',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:0
          },
          {
            id:'Third',
            name:'find your soul and soulmate in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://images.app.goo.gl/7dSQp2rb94pHWSuCA',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:0
          },
          {
            id:'Fourth',
            name:'Loss 100 kilo in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://images.app.goo.gl/7dSQp2rb94pHWSuCA',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:0
          },
        ]
    
}

const BlogReducer=(state,action)=>{

    if(action.type==='ADD'){
       const updatedBlogs=state.myBlogs.concat(action.blog);
       return {
           myBlogs:updatedBlogs
       }
    }
return defaultBlogsState;
}


const BlogProvider=(props)=>{
    const [BlogsState, dispatchBlogAction] = useReducer(BlogReducer, defaultBlogsState);

    const onAddBlogHandler=(blog)=>{
        dispatchBlogAction({
            type:'ADD',
            blog:blog,
        })
    }
    const blogContext={
        myBlogs:BlogsState.myBlogs,
        addBlog:onAddBlogHandler
    }

   return <BlogContext.Provider value={blogContext}>{props.children}</BlogContext.Provider>
}

export default BlogProvider;