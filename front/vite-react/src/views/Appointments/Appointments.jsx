import React, { useEffect } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../components/redux/userSlice";

const GETUSERBYID_URL = "http://localhost:3000/users/";

function Appointments() {
    const actualUserId = useSelector((state) => state.actualUser?.userData?.user?.id);
    const appointments = useSelector((state) => state.actualUser.userAppointments);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(GETUSERBYID_URL + actualUserId)
            .then((response) => response.data.appointments)
            .then((appointments) => dispatch(setUserAppointments(appointments)))
            .catch((error) => console.log(error.message));
    }, [actualUserId, dispatch]);

    const CANCEL_URL = "http://localhost:3000/appointments/cancel/"
    const handleAppoinmentCancel = (appointmentId) => {
        axios.put(CANCEL_URL + appointmentId)
        .then((response) => response.data)
        .then(data => {
            axios.get(GETUSERBYID_URL + actualUserId)
            .then((response) => response.data.appointments)
            .then((appointments) => dispatch(setUserAppointments(appointments)))
            .catch((error) => console.log(error.message));
        })
        .catch(error => alert(`error al cancelar: ${error?.response?.data?.message}`));

    }


    return (
        <>
        
            {appointments.length ?
            appointments.map((appointment) => (
                <AppointmentCard
                    key={appointment.id}
                    id={appointment.id}
                    date={appointment.date}
                    time={appointment.time}
                    status={appointment.status}
                    description={appointment.description}
                    handleAppoinmentCancel={handleAppoinmentCancel}
                />
            ))
            : <p>No hay reservas</p>
        }
        </>
    );
}

export default Appointments;
