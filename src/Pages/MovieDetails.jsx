import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getMovies, getMoviesById } from '../Services/firebaseServices'
import Typography from '@mui/material/Typography';
import { green, yellow } from '@mui/material/colors';
import StarRateIcon from '@mui/icons-material/StarRate';
//import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import './MovieDetails.css';

function MovieDetails(){

    const {id} = useParams()

    const [movie, setMovie] = useState(true)
    const [aboutMovie, setAboutMovie] = useState([])

    useEffect(
        () => {
            const result = async() => {
                try{
                    const movieData = await getMoviesById(id);
                    if(movieData){
                        setMovie(movieData.data())
                    }
                    const aboutMovieData = await getMovies()
                    setAboutMovie(aboutMovieData.about)
                }catch(e){
                    console.log(e);
                }
            } 
            result()
        }, 
        [id]
    )

    const colorGreen = green[700];

    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: yellow[600],
          },
        },
      });

    return(
        <Box sx={{ flexGrow: 1, mt:10  }}>
            <div>

            </div>
            <Grid container display="flex" wrap='wrap' justifyContent="center" alignItems="center">
                <Grid xs={4}>
                    <img src={movie.img} alt="Portada de la película" height='500px' width='340px' />
                </Grid>
                <Grid xs={6} textAlign='left'>
                    <h1>{movie.name}</h1>
                    <h3>{movie.year} - {movie.genre}</h3>
                    <h3>Directed by: {movie.director}</h3>      
                    <Typography color={colorGreen} fontSize='30px' display='flex' alignItems='center'>
                        <StarRateIcon theme={theme} color='neutral' />  
                        {movie.score}
                    </Typography>
                    <Typography>
                        {movie.argument}
                    </Typography>
                    <div className="movie-about-container">
                        {aboutMovie.map(about => <div className='movie-about'>{about}</div>)}
{/*                         <div className='movie-about'>
                            {movie.about[0]}
                        </div>
                        <div className='movie-about'>
                            {movie.about[1]}
                        </div>
                        <div className='movie-about'>
                            {movie.about[2]}
                        </div>
                        <div className='movie-about'>
                            {movie.about[3]}
                        </div> */}
                    </div>
                </Grid>
            </Grid>

            <Grid container sx={{mt:10}} display="flex" wrap='wrap' justifyContent="center" alignItems="center">
                <Grid xs={6} textAlign='left'>
                <h3>Personal Comments and extra information</h3>
                    <Paper elevation={3} sx={{p:5}}>
                        {movie.comments}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MovieDetails