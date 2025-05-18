import React from 'react';
import { Link } from 'react-router';

const Empty = () => {
    return (
        <div className='flex flex-col justify-center items-center p-12 space-y-4'>
            <h1 className='text-2xl text-center font-bold'>No Apply Found</h1>
                    <Link to='/'>
           <button  className='text-center btn text-md lg:text-xl  py-2 pt-1 rounded-full bg-[rgb(14,161,6)] text-white'>
          Go To Home</button>
        </Link>
        </div>
    );
};

export default Empty;