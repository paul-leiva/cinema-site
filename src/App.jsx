import './App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </div>
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
