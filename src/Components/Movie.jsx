import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, yellow } from '@mui/material/colors';
import StarRateIcon from '@mui/icons-material/StarRate';
//import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Movie({id, name, director, img, score, year, genre}){

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
      

    //const [color, setColor] = useState(green[700])

/*     const scoreColor =()=>{
        if({score}.value>6){
            color(true)
        }else if({score}.value<7 && {score}.value>3){
            setColor(yellow[500])
        }
    } */

    return(
        <Card sx={{ maxWidth: 240, marginX: 4, marginY:3}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="360"
          width="400"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Director: {director}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            Genre: {genre}
          </Typography>
        </CardContent>
        <CardActions>
          <Button as={Link} to={`/movies/${id}`} size="small">Details</Button>
          <Button size="small">Edit</Button>
          <StarRateIcon theme={theme} sx={{marginLeft: 2}} fontSize='10px' color='neutral' marginLeft='80px' />        
          <Typography color={colorGreen} fontSize='40px' marginLeft='5px'>
            {score}
          </Typography>
        </CardActions>
      </Card>
    )
}

export default Movie