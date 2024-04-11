import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import HotelsId from './pages/Hotels_x_Id'

import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/hotels.slice'
import { Route, Routes } from 'react-router-dom'
import PrincipalHeader from './components/shared/PrincipalHeader'
import Reservations from './pages/Reservations'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  
  
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  return (
    <div className='container-section'>
      <PrincipalHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels/:id' element={<HotelsId />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/reservations' element={<Reservations/>} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
