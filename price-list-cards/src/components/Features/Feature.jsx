import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature,index}) => {
    return (
        <div className='flex items-center'>
            {/* <p>{index+1}. {feature}</p> */}
            {/* <span>{feature}</span> */}
            {/* <li>{feature}</li> */}
            <CheckCircleIcon className="h-4 w-4 text-purple-400" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;