import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id,title,useId,body} = post;
    const navigate = useNavigate();
    const handleGOBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about your post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGOBack}>Go back</button>
        </div>
    );
};

export default Postdetail;