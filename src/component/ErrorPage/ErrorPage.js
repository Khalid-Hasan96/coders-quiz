import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <h2 className='font-bold text-6xl'><span className='text-red-500'>404</span> Not Found</h2>
            <p className='text-xl font-semibold mt-5'>We didn't find the data you're seeking.</p>
        </div>
    );
};

export default ErrorPage;