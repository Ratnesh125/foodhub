import './App.css'
import Home from './Home.jsx'
import FoodCard from './FoodCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/h" element={<Home />} />
          <Route path="/" element={<FoodCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
