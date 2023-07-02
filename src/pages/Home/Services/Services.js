import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

const ServicesData = [
    {
        id:1,
        title:"Fluoride Treatment",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: fluoride
    },
    {
        id:2,
        title:"Cavity Filling",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: cavity
    },
    {
        id:3,
        title:"Teeth Whitening",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: whitening
    },
]

    return (
        <div className='mt-8'>
            <div>
                <h2 className='text-secondary font-bold text-center text-2xl'>Our Services</h2>
                <h1 className='text-accent text-4xl text-center mt-2 font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {ServicesData.map(service=> <Service 
                key={service.id}
                service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;