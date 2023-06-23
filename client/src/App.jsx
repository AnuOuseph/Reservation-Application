import './App.css'
import Home from './user/user-pages/Home'
import LoginPage from './user/user-pages/LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
