import { useState, useEffect } from "react";

const useFetch = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log("usehok", posts);
    
    return posts;
}

export default useFetch;