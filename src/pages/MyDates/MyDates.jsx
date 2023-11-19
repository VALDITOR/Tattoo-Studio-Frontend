import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { myDates } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { Print } from "../../common/MyDatesTable/MyDatesTable";

export const MyDates = () => {
  const navigate = useNavigate();
  const datosRdxUser = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!datosRdxUser.credentials) {
      navigate("/");
    } else {
      const fetchData = async () => {
        try {
          const response = await myDates(datosRdxUser.credentials);
          if (isMounted) {
            setAppointments(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      };

      if (appointments.length === 0) {
        fetchData();
      }
    }

    return () => {
      setIsMounted(false);
    };
  }, [datosRdxUser, navigate, isMounted, appointments]);

  return (
    <div>
      <h2>Tabla de Citas</h2>
      <Print appo={appointments} />
    </div>
  );
};