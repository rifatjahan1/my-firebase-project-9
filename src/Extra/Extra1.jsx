import React from 'react';

const Extra1 = () => {
    return (
        <div className="mt-8 bg-blue-200 p-4 shadow rounded">
            <h3 className="text-4xl font-bold mb-2 text-gray-800 text-center">📄 Most Demanding Job</h3>
            <div className=" space-y-2 text-2xl p-12 rounded-2xl">
                <div className="flex justify-between">
                    <span>Full Stack Developer - Amazon</span>
                    <span className="text-green-600 font-semibold">82% Of Total Apply</span>
                </div>
                <div className="flex justify-between">
                    <span>Junior Frontend - Shopify</span>
                    <span className="text-fuchsia-500 font-semibold">70% Of Total Apply</span>
                </div>
                <div className="flex justify-between">
                    <span>React Intern - Netflix</span>
                    <span className="text-red-600 font-semibold">65% Of Total Apply</span>
                </div>
            </div>
        </div>

    );
};

export default Extra1;