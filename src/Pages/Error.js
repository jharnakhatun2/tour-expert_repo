import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center pt-52 bg-slate-200 h-screen'>
            <h3><span className='text-orange-600 text-5xl'>404..</span> This page is not found!</h3>
            <Link className="btn my-5" to='/'>GO TO HOME</Link>
        </div>
    );
};

export default Error;