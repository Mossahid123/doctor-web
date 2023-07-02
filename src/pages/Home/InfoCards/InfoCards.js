import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const CardData = [
        {
            id: 1,
            title: "Opening Hours",
            describtion: "open 9:00 am to 5:00 pm everyday",
            icon: clock,
            bgClass:"bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            title: "Visit Our Location",
            describtion: "open 9:00 am to 5:00 pm everyday",
            icon: marker,
            bgClass:"bg-accent"
        },
        {
            id: 3,
            title: "Contact Us",
            describtion: "open 9:00 am to 5:00 pm everyday",
            icon: phone,
            bgClass:"bg-gradient-to-r from-primary to-secondary"
        }
    ]

    return (
        <div className='grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {CardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)}
        </div>
    );
};

export default InfoCards;