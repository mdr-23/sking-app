import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddMovies from '../Pages/AddMovies'
import Movies from '../Components/Movies'
import MovieDetails from '../Pages/MovieDetails'

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-movies' element={<AddMovies />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
    )
}

export default Public