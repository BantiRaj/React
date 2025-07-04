import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';

const LearnCustomHook = () => {
   
    const posts = useFetch();

    return (
        <div>
            {
                (posts.length === 0) ? <h1>Loading...</h1> : <>
                    <ul>
                        {
                            posts.map(post => (
                                <li key={post?.id}>{post?.title}</li>
                            ))
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default LearnCustomHook