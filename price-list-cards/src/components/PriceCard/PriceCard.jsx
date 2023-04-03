import { list } from 'postcss';
import React from 'react';
import Feature from '../Features/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
            <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-white text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className='my-6 text-center text-2xl font-bold'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
            {
                price.features.map((feature,index) => <Feature
                feature={feature}
                index={index}>
                </Feature>)
            }
            <button className='mt-auto w-full bg-green-500 hover:bg-green-700 py-3 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;