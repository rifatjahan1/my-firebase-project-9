import React from 'react';

const Extra2 = () => {
    return (
        <div className='bg-gray-100 mt-8'>
            <div className='py-4 lg:pt-12'>
                <h2 className="text-3xl font-bold mb-3 text-center">How It Works</h2>
                <p className="text-gray-600 text-center">Create an account, browse companies, and apply directly to jobs you love.</p>
            </div>
            <section className="pb-12 pt-4 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl  font-bold text-gray-900 mb-6 text-center">
                        Popular Categories
                    </h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
                        <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
                            Frontend Development
                        </li>
                        <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
                            Backend Development
                        </li>
                        <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
                            UI/UX Design
                        </li>
                        <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
                            DevOps
                        </li>
                    </ul>
                </div>
            </section>



        </div>
    );
};

export default Extra2;