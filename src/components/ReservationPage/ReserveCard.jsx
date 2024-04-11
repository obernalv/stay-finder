import './styles/ReserveCard.css'

const ReserveCard = ({ reserve, setReserveSelected, deleteBooking }) => {
  const checkIn = new Date(reserve.checkIn);
  const checkOut = new Date(reserve.checkOut);

  const ReservationDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

  const handleReview = () => {
    const obj = {
      ...reserve,
      ReservationDays,
      subtotal: reserve.hotel.price * ReservationDays,
    };
    setReserveSelected(obj);
  };

  const handleDeleteBooking = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`;
    deleteBooking(url, reserve.id);
  };

  return (
    <article className="reservation-card-content">

      <header className='reservation__header-card'>
        <img className="reservation__hotelico" src={reserve.hotel.images[0].url} alt="" />
      </header>

      <section className='reservation-sec-location-card'>
        <h3 className='location-card__name'>{reserve.hotel.name}</h3>
        <div className='location-card__city'>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div className='location-card__reviewLink' onClick={handleReview}>Rate and comment this visit...</div>
      </section>

      <section className='reservation-sec-card-list'>
        <ul className='card-detail-itemValues'>

          <li className='card-detail-item'>
            <span className='card-detail__label'>Reservation Days: </span>
            <span className='card-detail__value'>{ReservationDays}</span>
          </li>

          <li className='card-detail-item'>
            <span className='card-detail__label'>Subtotal Price: </span>
            <span className='card-detail__value'>$ {reserve.hotel.price * ReservationDays} </span>
          </li>

        </ul>
      </section>

      <footer className='reservation-footer'>
        <button className='reservation-btn' onClick={handleDeleteBooking}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>

    </article>
  );
};

export default ReserveCard;
