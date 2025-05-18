import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto mt-8 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body ">
                <h1 className="text-3xl font-bold text-center ">Please Register!</h1>
                <form className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Photo URl</label>
                    <input type="text" name='Photo URl' className="input" placeholder="Photo URl" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    

                    <button className="btn btn-neutral mt-4 bg-blue-600 border-blue-600 text-white">Register</button>

                </form>
                <p>Already have an account? Please <Link className="underline text-blue-500" to='/login' > Login</Link></p>
            </div>
        </div>
    );
};

export default Register;