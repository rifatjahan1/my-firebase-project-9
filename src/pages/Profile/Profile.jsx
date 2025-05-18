import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user } = use(AuthContext)
    return (

        <div className="hero  min-h-screen ">
           
               <div className='bg-base-200 rounded-2xl shadow-2xl border border-blue-200 w-72 h-72'>
                 <h2 className='text-center text-2xl'>My-Profile</h2>
                 <div className=" flex flex-col gap-4 justify-center items-center mt-12 ">
                    
                    <h1 className="text-xl font-bold">{user.email}</h1>
                    <div className="flex items-center space-x-2">
                        <img

                            src={user.photoURL || 'https://i.pravatar.cc/100'}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                        />
                    </div>
                    <div><button className="btn btn-primary">Update</button></div>
                </div>
               </div>
            
        </div>

    );
};

export default Profile;