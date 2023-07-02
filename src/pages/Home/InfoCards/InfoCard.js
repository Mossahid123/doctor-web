import React from 'react';

const InfoCard = ({card}) => {
const {title,describtion,icon,bgClass}=card

    return (
        <div className={`card card-side p-6 mt-6 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{describtion}</p>
            </div>
        </div>
    );
};

export default InfoCard;