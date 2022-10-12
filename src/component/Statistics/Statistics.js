import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




const Statistics = () => {
    const getDatas = useLoaderData();
    console.log('data', getDatas.data);
    const mainData = getDatas.data;

    const data = [
        {
            name: `${mainData[0].name}`,
            Quiz: `${mainData[0].total}`,
            amt: 12,
        },
        {
            name: `${mainData[1].name}`,
            Quiz: `${mainData[1].total}`,
            amt: 12,
        },
        {
            name: `${mainData[2].name}`,
            Quiz: `${mainData[2].total}`,
            amt: 12,
        },
        {
            name: `${mainData[3].name}`,
            Quiz: `${mainData[3].total}`,
            amt: 12,
        }
    ];
    return (
        <div>
            <h2 className='my-12 text-3xl font-bold bg-yellow-200 text-center underline w-2/4 py-3 mx-auto rounded-lg'>No of questions in every quiz</h2>
            <div className='w-2/4 mx-auto'>
                <BarChart
                    width={700}
                    height={450}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Quiz" fill="rgb(250 204 21)" />
                </BarChart>
            </div>

        </div>
    );
};

export default Statistics;