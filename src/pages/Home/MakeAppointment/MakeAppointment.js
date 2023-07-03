import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
       <section className='mt-40' style={{background:`url(${appointment})`}}>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="-mt-32 rounded-lg hidden md:block shadow-2xl w-1/2" />
                <div>
                    <h3 className="text-2xl font-bold text-secondary">Appointment</h3>
                    <h1 className='text-4xl text-white'>Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
       </section>
    );
};

export default MakeAppointment;