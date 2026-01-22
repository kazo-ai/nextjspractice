import axios from "axios";

export default async function Blogpage({params}:any) {
    const postId =  params.blogid; // asssigning whatevr is blog id will be postid
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data;
    console.log(Error);

    return(
        <div>
        Blog page {postId}
        <br/>
        Title: {data.title}
        body:{data.body}
        
        </div>
    )
    }
