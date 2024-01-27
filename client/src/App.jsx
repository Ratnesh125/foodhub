import './App.css'
import Home from './Home.jsx'
import FoodCard from './FoodCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recommended from './rECOMMENDED.JSX'
import SearchBar from './SearchBar.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/h" element={<SearchBar />} />
          <Route path="/" element={<FoodCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
