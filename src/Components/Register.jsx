import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser}= use(AuthContext);
     const handleRegister = e => {
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result => {
            const user =result.user
            setUser(user)
            
        })
        .catch(error => {
            const errorCode= error.code;
            const  errorMessage= error.message;
            alert(errorMessage)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-8 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body ">
                <h1 className="text-3xl font-bold text-center ">Please Register!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">Photo URl</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URl" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    

                    <button type="submit" className="btn btn-neutral mt-4 bg-blue-600 border-blue-600 text-white">Register</button>

                </form>
                <p>Already have an account? Please <Link className="underline text-blue-500" to='/login' > Login</Link></p>
            </div>
        </div>
    );
};

export default Register;