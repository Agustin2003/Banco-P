import React, {useState} from "react";
import "./styles.css"; // Importa los estilos desde el archivo styles.css

function AppointmentCard({id, date, time, status, description, handleAppoinmentCancel}) {

    date = new Date(date);
    const formatDate = `
        ${date.getDate()} /
        ${date.getMonth() + 1} /
        ${date.getFullYear()}
    `
    const handleClick = () => {
        if(
            window.confirm(
                `Deseas cancelar la reserva del dia ${formatDate} a las ${time} hs?`
            )) {
                handleAppoinmentCancel(id);
            }
    };

    return (
        <div className="cardContainer"> {/* Usa className directamente */}
        <span>{formatDate}</span>
        <span>{time} hs</span>
        <span>{description}</span>
        {status === "active" ?(
        <span className="active" onClick={handleClick}> Activo (cancelar)
        </span>
        ):(
         <span className="cancelled">Cancelado</span>
        )}
        </div>
        );
}

export default AppointmentCard;
