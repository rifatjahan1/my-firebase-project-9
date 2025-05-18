import React from 'react';
import { useEffect, useRef } from "react"
import { Link } from 'react-router';
import { addFavorite } from '../../utils';


const JobModal = ({ job, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (job && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [job]);

  if (!job) return null;
  const handleFavorite = () => {
   addFavorite(job);
  }


  return (
    <dialog
      ref={dialogRef}
      className="rounded-xl p-6 w-full max-w-xl backdrop:bg-black/50"
      onClose={onClose}
    >
      <form method="dialog">
        <button
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
      </form>

      <div className='bg-center bg-no-repeat'>
        <img src={job.bannerImage} alt={job.title} className="w-full  h-64 object-cover rounded mb-4" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-1">{job.jobType} · {job.location}</p>
      <p className="text-gray-500 mb-4">{job.salary}</p>
      <p className="mb-2">Job Time: {job.time}</p>
      <ul className="list-disc list-inside mb-4">
        {job.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
      <div className="flex justify-between">
        <Link to='/'>
           <button onClick={handleFavorite} className=' btn text-md lg:text-xl  py-2 pt-1 rounded-full bg-[rgb(14,161,6)] text-white'>
          Apply</button>
        </Link>
        <form method="dialog">
          <button className="text-gray-600 px-4 py-2 hover:text-black" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default JobModal;