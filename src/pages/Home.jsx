
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import { useRef, useState } from 'react'
import './styles/Home.css'
import CategoryFilter from '../components/HomePage/CategoryFilter'
import PriceFilter from '../components/HomePage/PriceFilter'


const Home = () => {

  const [inputName, setInputName] = useState('')
  const [fromTo, setFromTo] = useState({
    from:0,
    to:Infinity
  })
  
  const hotels = useSelector(state => state.hotels)

  const inputValue = useRef()

  const handleChange = () => {
    setInputName(inputValue.current.value)
  }

  const cbfilter = hotelInfo => {

    //filter name
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim())
    //filler prices
      const price = Number(hotelInfo.price) 
      const filterPrice = price >= fromTo.from && price <= fromTo.to

    return filterName && filterPrice
  }

  return (
    <div>

      <div className='content-search '>

        <div className='content-input'>
          <span><i className='bx bx-search'></i></span>
          <input className='input-search' placeholder='Name of hotels' onChange={handleChange} value={inputName} ref={inputValue} type="text" />

        </div>

        <hr />
        
        <aside>
          {/* <h3>Filters</h3> */}
          <CategoryFilter />
        </aside>

        <hr />

        <aside >
            <PriceFilter setFromTo = {setFromTo}/>
        </aside>

      </div>


      <div className='container-card'>
        {
          hotels?.filter(cbfilter).map(hotelInfo => (
            <HotelCard
              key={hotelInfo.id}
              hotel={hotelInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home