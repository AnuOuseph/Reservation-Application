import './App.css'
import Home from './user/user-pages/Home'
import HotelPage from './user/user-pages/HotelPage'
import LoginPage from './user/user-pages/LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/hotels' element={<HotelPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
