import axios from 'axios';
export const postList=()=>{
   return function(dispatch,getState){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{

        
           dispatch({type: 'POST_LIST', payload: response.data})
       }).catch((e)=>{
           console.log("some error in fetching data")
       });
   }
}
export const fetchUser=(id)=>{
   return function(dispatch,getState){
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>{

        console.log(response)
           dispatch({type: 'FETCH_USERS', payload: response.data})
       }).catch((e)=>{
           console.log("some error in fetching data")
       });
   }
}