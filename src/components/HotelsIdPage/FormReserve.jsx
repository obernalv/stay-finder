import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'
import './styles/FormReserve.css'

const FormReserve = ({hotelId}) => {

  const {handleSubmit, register, reset } = useForm()
  const [,,createFinder] = useCrud()

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    data.hotelId = Number(hotelId)
    createFinder(url, data)
  }

  return (
    
    <section className='section-booking' >
        <h3 className='booking-ask'>Do you want to reserve this hotel?</h3>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            <span>Check-in </span>
            <input {...register('checkIn')} type="date" />
          </label>
          <hr className='separador'/>
          <label>
            <span>Check-out </span>
            <input {...register('checkOut')} type="date" />
          </label>
          <button>Submit</button>
        </form>
    </section>
      
  )
}

export default FormReserve