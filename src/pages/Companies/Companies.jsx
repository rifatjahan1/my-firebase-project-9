import React from 'react';
import { Link } from 'react-router';

const Companies = ({ companies }) => {
    return (
        <div>
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4 '>
                {companies.map(company => (
                    <div className="hero bg-gray-300 rounded-2xl  ">
                        <Link key={company.id} to={`/companydetails/${company.id}`} className="">


                            
                                <div className="hero-content text-center">
                                    <div className="max-w-md flex flex-col justify-center items-center">
                                        <div>
                                            <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain" />
                                        </div>
                                        <div className="mt-2 text-center font-medium text-2xl">{company.name}</div>
                                       
                                    </div>
                                </div>
                           

                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Companies;