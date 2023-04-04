import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../Singlepost/Singlepost';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>All posts are here: {posts.length}</h2>
            <div>
                {
                   posts.map(post => <Singlepost
                   key={post.id}
                   post={post}
                   ></Singlepost>) 
                }
            </div>
        </div>
    );
};

export default Posts;