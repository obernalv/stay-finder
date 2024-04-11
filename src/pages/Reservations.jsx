import React, { useEffect, useState } from "react";
import ReserveCard from "../components/ReservationPage/ReserveCard";
import useCrud from './../hooks/useCrud'
import FormReviews from "../components/ReservationPage/FormReviews";
import './styles/Reservations.css'

const Reservations = () => {
  const [bookings, getBooking,,deleteBooking] = useCrud();
  const [reserveSelected, setReserveSelected] = useState()


  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getBooking(url);
  }, []);


  return (
    <section className="reservation-content">

      {/* <FormReviews 
        reserveSelected = {reserveSelected} 
        setReserveSelected ={setReserveSelected}
      /> */}

      <h2 className="reservation__title">Reservations</h2>
      <div className="reservation__detail-card">
        {bookings?.map((reserve) => (
          <ReserveCard
            key={reserve.id}
            reserve={reserve}
            setReserveSelected={setReserveSelected}
            deleteBooking ={deleteBooking}
          />
        ))}
      </div>
    </section>
  );
};

export default Reservations;
