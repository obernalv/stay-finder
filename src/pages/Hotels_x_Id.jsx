import { Link, useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { useEffect } from "react";
import { Map, Overlay } from "pigeon-maps";
import OtherHotel from "../components/HomePage/OtherHotel";
import FormReserve from "../components/HotelsIdPage/FormReserve";
import "./styles/Hotels_x_Id.css";
import Starts from "../components/HomePage/Starts";

const Hotels_x_Id = () => {
  const { id } = useParams();

  const url = `https://hotels-api.academlo.tech/hotels/${id}`;

  //prm1 info que envia la api
  //prm2 funcion que hace la peticion
  const [hotel, getHotel] = useHttp(url);

  useEffect(() => {
    getHotel();
  }, [id]);

  return (
    <div className="content-hotel-search">
      <section className="section-title-search">
        <h2 className="hotel-search__title">{hotel?.name}</h2>

        <Starts rating={hotel?.rating} />
      </section>

      <section>
        <div className="slider">
          <img src={hotel?.images[0].url} alt="" />

          {hotel && (
            <Map
              height={200}
              defaultCenter={[+hotel.lat, +hotel.lon]}
              zoom={15}
              maxZoom={16}
            >
              <Overlay anchor={[+hotel.lat, +hotel.lon]} offset={[20, 20]}>
                <img src="images/hotel.png" width={40} alt="" />
              </Overlay>
            </Map>
          )}
        </div>

        <section className="section-hotel-detail">
          <h3>
            {hotel?.city.name}, {hotel?.city.country}
          </h3>

          <p>
            <i className="bx bx-map"></i>
            <span>{hotel?.address}</span>
          </p>

          <p className="hotel-description">{hotel?.description}</p>
        </section>

      </section>

      {

        localStorage.getItem("token") ? (
          <FormReserve hotelId={hotel?.id} />
        ) : (
          <h4 className="goto-login">
            If you want to make a reservation, please{" "}
            <Link className="link-style" to="/login">
              login
            </Link>
          </h4>
        )

      }

      <OtherHotel hotel={hotel} />
    </div>
  );
};

export default Hotels_x_Id;
