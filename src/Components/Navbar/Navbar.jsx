import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('sign out succesfull')
            })
            .catch(error => {
                console.log(error)
            })

    }
    const links = <>
        <li ><NavLink to="/">Home</NavLink></li>
         <li ><NavLink to="/apply">All-Apply</NavLink></li>
        <li ><NavLink to="/about">About</NavLink></li>
        <li ><NavLink to="/contactus">Contact</NavLink></li>
        {user &&
         <>
        
        <li ><NavLink to="/profile">profile</NavLink></li>
        </>

        }



    </>
    return (


        <div className="navbar bg-base-100 shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                        <li ><NavLink to="/login">Login</NavLink></li>
                        <li ><NavLink to="/register">Register</NavLink></li>

                    </ul>
                </div>
                <a className=" font-bold text-3xl text-blue-500">jobPortal</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {links}



                </ul>

            </div>
            <div className="navbar-end  hidden lg:flex ">

                <ul className="menu menu-horizontal px-1">
            

            


                    {!user ? (
                        <>

                            <li><NavLink  to="/login" className="text-xl font-semibold">
                                Login
                            </NavLink></li>
                            <li>
                                <NavLink to="/register" className="text-xl font-semibold underline">
                                    Register
                                </NavLink>
                            </li>

                        </>

                    ) : (
                        
                        <>
                                              
                             <button className='me-6'onClick={() => navigate('/profile')} >
                                <img
                                    src={user.photoURL || 'https://i.pravatar.cc/100'}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                                />
                            </button>

                            <button
                                onClick={handleSignOut}
                                className="text-xl font-semibold text-red-600 hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </ul>
            </div>
        </div>


    );
};

export default Navbar;