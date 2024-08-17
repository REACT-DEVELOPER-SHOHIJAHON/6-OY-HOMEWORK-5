import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import User from './routes/User'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/:id' element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
