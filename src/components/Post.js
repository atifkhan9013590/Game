
import React, { useEffect, useState } from 'react'

function Post() {
    const PostUrl='https://jsonplaceholder.typicode.com/posts'
    const CommentUrl='https://jsonplaceholder.typicode.com/comments'
    const[post,setpost]=useState([])
    


    function getcomments(PostId){
      const index= post.findIndex((pst)=>pst.id===PostId);
      if(!post[index].comments){
        fetch(CommentUrl +'?postId='+ PostId)
        .then((response)=> response.json())
        .then((data)=>{//console.log(data);
        
         const newPost=[...post];
        newPost[index]={...post[index],comments:data}
  
        newPost.forEach((pst, i) => {
          if (i !== index && pst.comments) {
            newPost[i] = { ...pst, comments: null };
          }
        });
  
        // newPost.splice(index,1,{...post[index],comments: data})
         setpost(newPost)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      
      }
     
    
    }
    const handleClick=(postId)=>{
      getcomments(postId)
    }
    const handleIndex=(postId)=>{
     const pt= post.findIndex((pst)=>pst.id===postId)
     console.log(pt)
    }
    useEffect(()=>{
     
        fetch(PostUrl)
          .then((response) => response.json())
          .then((data) => {
            setpost(data);
           // console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      },[])
  return (
    <div className='div'>
      
        {
            post.map((pst)=>{

               return <div className="div-container" key={pst.id}>
                <div className="posts" key={pst.id}>
               
                
                <div className="div2">{pst.id}</div>
                <div className="div3">{pst.title}</div>
                <div className="div4">{pst.body}</div>
              </div>

                <button onClick={()=>handleClick(pst.id)} >show comments</button>
                
                {pst.comments? <div className=''>
                  {pst.comments.map((cmt)=>{
                      return <div className='comments' key={cmt.id}>
                        <div className="di">{cmt.name}</div>
                        <div className="di2">{cmt.email}</div>
                      </div>
                  })}
                </div>:null}
                </div>
            })
        }
     
    </div>
  )
}

export default Post

