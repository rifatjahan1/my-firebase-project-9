import React from 'react';
import Extra1 from '../../Extra/Extra1';
import Extra2 from '../../Extra/Extra2';
import { useLoaderData } from 'react-router';
import Banner from '../../pages/Banner/Banner';
import Companies from '../../pages/Companies/Companies';
import CompanyTitle from '../../pages/CompanyTitle/CompanyTitle';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <CompanyTitle></CompanyTitle>
            <Companies companies={data} />
            
            <Extra2></Extra2>
            <Extra1></Extra1>

        </div>
    );
};

export default Home;