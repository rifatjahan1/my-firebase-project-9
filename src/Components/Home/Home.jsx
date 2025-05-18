import React from 'react';
import Extra1 from '../../Extra/Extra1';
import Extra2 from '../../Extra/Extra2';
import { useLoaderData } from 'react-router';
import Banner from '../../pages/Banner/Banner';
import Companies from '../../pages/Companies/Companies';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Companies companies={data} />
            <Extra1></Extra1>
            <Extra2></Extra2>

        </div>
    );
};

export default Home;