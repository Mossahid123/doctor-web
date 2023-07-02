import React from 'react';

const Service = ({service}) => {
    const {title, icon, description} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-accent">
            <figure className="px-10 pt-10">
                <img src={icon}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;