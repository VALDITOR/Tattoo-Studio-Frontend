import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice";
import { myDates, deleteMyDates } from "../../services/apiCalls";

export const Print = ({ appo }) => {
  const headers = [
    "Tattoo Artist Name",
    "Tattoo Artist Surname",
    "Tattoo Artist Email",
    "Date",
    "Status",
    "Actions",
  ];

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return new Date(dateString).toLocaleString(undefined, options);
  };

  const datosRdxUser = useSelector(userData);
  const [updatedAppointments, setUpdatedAppointments] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await myDates(datosRdxUser.credentials);
      setUpdatedAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = (appointmentId) => {
    deleteMyDates(datosRdxUser.credentials)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error al eliminar la cita:", error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(appo) &&
          appo.map((user) => (
            <tr key={user.id}>
              <td>{user.user_name}</td>
              <td>{user.tattoo_artist_name}</td>
              <td>{user.work}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>{user.price}</td>
              <td>{formatDate(user.date)}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};