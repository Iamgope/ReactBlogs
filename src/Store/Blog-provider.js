import React,{useReducer} from 'react';
import BlogContext from './Blog-context';


const compare_likes=(a,b)=>{
  if(a.Likes<b.Likes) return 1;
  else if(a.Likes>b.Likes) return -1;
  return 0;
  }

const defaultBlogsState={
    myBlogs:[

        {
            id:'first',
            name:'Learn React in only 2 days ',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://i.postimg.cc/Sx8gv4B9/steve-johnson-e5-Ldl-AMpk-Ew-unsplash.jpg',
            hashtag:["#life","#sprituality","#apun"],
            Likes:21,
            date:new Date(2020,12,1),
      
          },
          {
            id:'second',
            name:'Crack Jee in only 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png',
            hashtag:["#life","#sprituality"],
            Likes:21,
            date:new Date(2021,5,2)

          },
          {
            id:'Third',
            name:'find your soul and soulmate in 2 days',
            content:'We know  how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg',
            hashtag:["#life","#sprituality","#bhawaan_hai"],
            Likes:21,
            date:new Date(2020,0,2)

          },
          {
            id:'Fourth',
            name:'meriam webster...is another facebok',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apnaapna"],
            Likes:20,
            date:new Date(2020,1,2)

          },
          {
            id:'Fifth',
            name:'who are you martin i have never seen you',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:21,
            date:new Date(2020,1,2)

          },
          {
            id:'sixth',
            name:'Loss 100 kilo in 2 days',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:21,
            date:new Date(2020,1,2)

          },
          {
            id:'seventh',
            name:'what the fuck',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:18,
            date:new Date(2020,1,2)

          },
          {
            id:'eighth',
            name:'come again another day',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:20,
            date:new Date(2020,1,2)

          },
          {
            id:'ninth',
            name:'rain rain go away',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:20,
            date:new Date(2020,1,2)

          },
          {
            id:'tenth',
            name:'No pain no gain',
            content:'We know how  fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:19,
            date:new Date(2020,1,2)

          }



        ],
        featuredBlog:[
          {
            id:'first',
            name:'Learn React in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:21,
            date:new Date(2020,12,1)
          },
          {
            id:'second',
            name:'Crack Jee in 2 days',
            content:'We know how fascinating is this to hear that you can learn react just in 2 days!',
            imageLink:'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png',
            hashtag:["#life","#sprituality","#apun_hi_bhawaan_hai"],
            Likes:21,
            date:new Date(2021,5,2)

          },
         
       
        ]

    
}



const BlogReducer=(state,action)=>{

    if(action.type==='ADD'){
       const updatedBlogs=[action.blog,...state.myBlogs];
      //console.log(action.blog);
      const sortedUpdatedBlogs=[...updatedBlogs];
      sortedUpdatedBlogs.sort(compare_likes)
     const Fblogs=[sortedUpdatedBlogs[0],sortedUpdatedBlogs[1],sortedUpdatedBlogs[2]];
       return {
           myBlogs:updatedBlogs,
           featuredBlog:Fblogs
       }
    }
    if(action.type==='Liked'){
      let updatedBlogs;
      const index=state.myBlogs.findIndex(blog=>blog.id===action.id);
      const existingBlog=state.myBlogs[index];
      const likes=existingBlog.Likes+action.addNo;
       updatedBlogs=[...state.myBlogs];
      const updatedBlog={...existingBlog,Likes:likes};
      updatedBlogs[index]=updatedBlog;
      const sortedUpdatedBlogs=[...updatedBlogs];
      sortedUpdatedBlogs.sort(compare_likes)
     const Fblogs=[sortedUpdatedBlogs[0],sortedUpdatedBlogs[1],sortedUpdatedBlogs[2]];
       return {
           myBlogs:updatedBlogs,
           featuredBlog:Fblogs
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

    const LikeHandler=(id,addNo)=>{
      dispatchBlogAction({
        type:'Liked',
        id:id,
        addNo:addNo
      })
    }

  
    const blogContext={
        myBlogs:BlogsState.myBlogs,
        featuredBlog:BlogsState.featuredBlog,
        addBlog:onAddBlogHandler,
        onLike:LikeHandler
    }

   return <BlogContext.Provider value={blogContext}>{props.children}</BlogContext.Provider>
}

export default BlogProvider;