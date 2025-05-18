import React from 'react';

const Extra1 = () => {
    return (
        <div className="mt-8 bg-blue-200 p-4 shadow rounded">
            <h3 className="text-xl lg:text-4xl font-bold mb-2 text-gray-800 text-center">📄 Most Demanding Job</h3>
            <div className=" space-y-8 lg:space-y-4 lg:text-2xl  lg:p-12 rounded-2xl">
                <div className="border lg:border-0 lg:flex justify-between ">
                    <p>Full Stack Developer - Amazon</p>
                    <p className="text-green-600 font-semibold">82% Of Total Apply</p>
                    
                </div>
                <div className="border lg:border-0 lg:flex justify-between">
                    <p>Junior Frontend - Google</p>
                    <p className="text-fuchsia-500 lg:font-semibold">70% Of Total Apply</p>
                </div>
                <div className="border lg:border-0 lg:flex justify-between">
                    <p>React Intern - Oracle</p>
                    <p className="text-red-600 font-semibold">65% Of Total Apply</p>
                    
                </div>
            </div>
        </div>

    );
};

export default Extra1;