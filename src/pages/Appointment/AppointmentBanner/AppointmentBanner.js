import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import background from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

   
    return (
        <header style={{ backgroundImage: `url(${background})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                        mode= "single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        />;
                    </div>
                   
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;