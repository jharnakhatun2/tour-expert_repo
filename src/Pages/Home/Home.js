import React from 'react';
import useTitle from '../../Hook/useTitle';
import Services from '../Services/Services';
import Banner from './Banner';
import Choose from './Choose';
import Destination from './Destination';

const Home = () => {
    useTitle('Home');
    return (
        <div className="bg-slate-100">
           <Banner></Banner>
           <Services></Services>
           <Destination></Destination>
           <Choose></Choose>
        </div>
    );
};

export default Home;