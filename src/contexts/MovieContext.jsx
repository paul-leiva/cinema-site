import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // Use key "favorites" to access favorites in local storage
    const storedFavs = localStorage.getItem("favorites")

    if (storedFavs) { 
      setFavorites(JSON.parse(storedFavs)) 
    }
  }, [])
  
  useEffect (() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    // Take the previous array of favorites and make a new array with the latest favorite
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }
  
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}