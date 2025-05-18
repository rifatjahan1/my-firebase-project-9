import React from 'react';
import Extra1 from '../../Extra/Extra1';
import Extra2 from '../../Extra/Extra2';
import { useLoaderData } from 'react-router';
import Banner from '../../pages/Banner/Banner';
import Companies from '../../pages/Companies/Companies';
import CompanyTitle from '../../pages/CompanyTitle/CompanyTitle';
import { motion } from 'framer-motion';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <motion.section
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className=" bg-gradient-to-r from-pink-100 to-pink-200  p-12 rounded-2xl shadow-xl mt-10 mx-auto w-[90%] text-center"
            >
                 <Banner></Banner>
            <CompanyTitle></CompanyTitle>
            <Companies companies={data} />
            
            <Extra2></Extra2>
            <Extra1></Extra1>

        </motion.section>
           




        </div>
    );
};

export default Home;