import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    //const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location?.state || '/');
            })
            .catch((error) => {
                alert(error.code + ': ' + error.message);
            });
    };

    // const handleForgotPassword = () => {
    //     navigate('/forgot-password', { state: { email } });
    // };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl lg:text-4xl font-bold mb-6 text-center">Login Please</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}

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

                <div className="text-right text-sm  text-blue-600  py-2 rounded hover:text-blue-700">
                    <button
                        type="button"
                        onClick={() => navigate('/forgot-password')}

                    >
                        Forgot Password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-center text-sm">
                Don't have an account?{' '}
                <Link className="underline text-blue-500" to="/register">Register</Link>
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
