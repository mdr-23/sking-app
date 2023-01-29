import { Grid } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getMovies } from '../Services/firebaseServices'
import Movie from './Movie'

function Movies(){

    const [movies, setMovies] = useState([])
    //const [buscar, setBuscar] = useState('')

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const movies = await getMovies()
                    setMovies(movies)
                }catch(e){
                    console.log(e)
                }
            } 
            result()
        }
    )

    return(
        <>
            <h1>Movies</h1>

            <Grid container marginTop='50px' display="flex" wrap='wrap' justifyContent="center">
                {movies.map(movie => <Movie key={movie.id} {...movie.data()} id={movie.id} />)}
            </Grid>
        </>
    )
}

export default Movies