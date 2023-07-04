import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [availableAppointment, setAvailableAppointment] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data))
    }, [])
    return (
        <div className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8'>
                { 
                availableAppointment.map(option => <AppointmentOption
                    key={option._id}
                    AppointmentOption={option} />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;