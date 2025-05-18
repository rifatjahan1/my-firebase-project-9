import React from 'react';

const Extra1 = () => {
    return (
        <div className="mt-8 bg-blue-200 p-4 shadow rounded">
  <h3 className="text-4xl font-bold mb-2 text-gray-800 text-center">📄 My Applications</h3>
  <div className=" space-y-2 text-2xl p-12 rounded-2xl">
    <div className="flex justify-between">
      <span>Full Stack Developer - Amazon</span>
      <span className="text-green-600 font-semibold">Under Review</span>
    </div>
    <div className="flex justify-between">
      <span>Junior Frontend - Shopify</span>
      <span className="text-yellow-600 font-semibold">Pending</span>
    </div>
    <div className="flex justify-between">
      <span>React Intern - Netflix</span>
      <span className="text-red-600 font-semibold">Rejected</span>
    </div>
  </div>
</div>

    );
};

export default Extra1;