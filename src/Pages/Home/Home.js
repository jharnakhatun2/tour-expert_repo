import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Choose from './Choose';
import Destination from './Destination';
import Map from './Map';

const Home = () => {
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