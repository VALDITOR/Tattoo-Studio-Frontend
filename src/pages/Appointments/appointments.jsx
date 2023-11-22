import React, { useState } from 'react';
import './Appointments.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { appointments } from '../../services/apiCalls';

export const Appointments = () => {

        const [appointmentData, setAppointmentData] = useState({
            tattoo_artist_id: '',
            date: '',
            // time: '',
        });
    
        const rdxUserData = useSelector(userData);
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setAppointmentData({
                ...appointmentData,
                [name]: value,
            });
        };

        
    const handleCreateAppointment = async () => {
        try {
            const response = await appointments(rdxUserData.credentials.token, appointmentData);
            console.log(response.data);
        } catch (error) {
            console.error('Error al crear la cita:', error.message);
            console.log(rdxUserData.credentials.token);   
            console.log(appointmentData);
        }
    };


    return (
        <div className="appointmentsDesign">
            <div className='new-appointment-div'>
                <div className='title'>ARTIST</div>
                <input
                    type='text'
                    name='tattoo_artist_id'
                    onChange={handleInputChange}
                    value={appointmentData.artist}
                    required
                ></input>
                <div className='title'>DATE</div>
                <input
                    type='datetime-local'
                    name='date'
                    onChange={handleInputChange}
                    value={appointmentData.date}
                    required
                ></input>
                
                <button onClick={handleCreateAppointment}>CREATE</button>
            </div>
        </div>
    );
}