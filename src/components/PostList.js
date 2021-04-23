import React,{useEffect} from 'react';
import {postList} from '../actions/index';
import {connect} from 'react-redux';

function PostList({posts,postList}) {
    useEffect(() => {
     postList();   
    },[])
    const renderedList = posts.map((post)=>{
        return(

            <div key={post.id}>

              <li  className="list-group-item">
              {post.title}
              <p>{post.body}</p>
             
              </li> ;       
            </div>
            )
            
    })
    console.log(posts);
    return (
        <div className="container">
            <ul className="list-group">
                {renderedList}
            </ul>
        </div>
    )
}


const mapStateToProps=(state)=>{
   return {posts: state.posts}
}

export default connect(mapStateToProps, {postList})(PostList);
