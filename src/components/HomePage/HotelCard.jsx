import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'
import Starts from "./Starts"



const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/hotels/${hotel.id}`)
    }

    

    return (
        <article className="card-content">
            <header className="card-content__icon">
                <img className="card__icon" src={hotel.images[0].url} alt={hotel.images[0].url} />
            </header>

            <section className="hotel-section">
                <h3 className="hotel__title">{hotel.name}</h3>  

                <section className="hotel__details">
                    <Starts rating={hotel.rating} />
                    <span className="hotel__country">{hotel.city.name}, {hotel.city.country}</span>
                    <div className="hotel__price">$ {hotel.price}</div>
                </section>

            </section>

            <footer className="footer">
                <button className="btn-more" onClick={handleClick}>See more</button>
            </footer>
        </article>
    )
}

export default HotelCard