import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.post('http://127.0.0.1:8000/api/register')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })

    return(
        <div>   
            <ul>
                {
                    posts.map(post =>(
                    <li key={post.id}>{post.litle}</li>
                    ))}

            </ul>
        </div>
    );

}
export default DataFetching;