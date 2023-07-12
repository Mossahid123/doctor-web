import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({AppointmentOption, setTreatment}) => {
    const {name,slots} = AppointmentOption ;
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center text-secondary font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0]: "try Another day"}</p>
                <p>{slots.length} Available spaces </p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(AppointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;