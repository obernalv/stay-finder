import React, { useEffect } from 'react'
import useHttp from '../../hooks/useHttp'
import HotelCard from './HotelCard'
import './styles/OtherHotel .css'

const OtherHotel = ({ hotel }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
    const [hotelsInCity, getHotelsInCity] = useHttp(url)


    useEffect(() => {
        if(hotel){
            getHotelsInCity()
        }
        
    }, [hotel])

    return (
        <section className='section-hotels-other'>
            <h3 className='hotels-other-title'>Other hotels in <span>{hotel?.city.name}</span> </h3>
            <div className='card-hotel-other'>
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo =>(
                    <HotelCard
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default OtherHotel