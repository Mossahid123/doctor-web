import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';

const Services = () => {

    const ServicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening
        },
    ]

    return (
        <div className='mt-8'>
            <div>
                <h2 className='text-secondary font-bold text-center text-2xl uppercase'>Our Services</h2>
                <h1 className='text-accent text-4xl text-center mt-2 font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {ServicesData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
            <div className="hero min-h-screen mt-9 w-3/4 mx-auto">
                <div className="hero-content flex-col lg:flex-row content-between">
                    <img src={treatment} className='w-[458px] h-[578px]' />
                    <div className='ml-9'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;