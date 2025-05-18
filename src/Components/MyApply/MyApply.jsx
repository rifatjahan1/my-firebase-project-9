import React from 'react';

const MyApply = ({ item, handleRemove}) => {
    return (
        <div>
            <div className='py-12'>
               
                <div className=' p-4 lg:p-0 border mt-8 border-pink-500  rounded-2xl lg:p-8'>
                    <h1 className='text-2xl mb-2'>{item.title}</h1>
                    <div className='lg:flex items-center justify-between mb-4'>
                       <div> {item.location}</div>
                       <div>Job Time: {item.time}</div>
                        
                    </div>
                    <button  onClick={() => handleRemove(item.id)} className='btn  text-pink-500 text-xl'>Cancel Apply </button>
                </div>
            </div>

        </div>
    );
};

export default MyApply;