import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                         placeholder="Email"
                        required
                        className="w-full border input border-gray-300 rounded p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                         placeholder="Password"
                        required
                        className="w-full input border border-gray-300 rounded p-2"
                    />
                </div>

                <div className="text-right text-sm">
                    <button type="button" className="text-blue-600 hover:underline">
                        Forgot Password?
                    </button>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>

            <p className="mt-4 text-center text-sm">
                Don't have an account?{' '}
                 Please <Link className="underline text-blue-500" to='/register'> Register</Link>
            </p>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Or login with</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;