import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import JobModal from '../JobModal/JobModal';

const CompanyDetails = () => {
        const data = useLoaderData();
    const { id } = useParams()

    const company = data.find(value => value.id === id);
    
    const [selectedJob, setSelectedJob] = useState(null);

    if (!company) return <div className="p-6">Company not found.</div>;
    return (
        <div className='py-12'>
                        <div className='text-center'>
                <div className='flex items-center justify-center'>  
                     <img src={company.logo} alt={company.name} className="w-24 h-24 " />
                </div>
                <p>{company.industry}</p>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    Visit Website
                </a>
            </div>

            <div>
                <h3 className="text-2xl lg:text-4xl font-semibold mb-4 text-center  text-blue-500 ">Available Jobs</h3>
                <div className="space-y-4">
                    {company.jobs.map(job => (
                        <div key={job.id} className="border border-amber-500 p-4 rounded shadow">
                            <div className='text-center space-y-4'>
                                <h4 className="text-xl lg:text-2xl font-bold">{job.title}</h4>
                                <p>{job.description}  </p>
                                <p>Job Location: {job.location}</p>
                                <button
                                    className="mt-2 text-white bg-blue-600 px-3 py-1 rounded"
                                    onClick={() => setSelectedJob(job)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedJob && (
            <JobModal job={selectedJob} onClose={() => setSelectedJob(null)}></JobModal>
            )}
        </div>
    );
};

export default CompanyDetails;