import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container, FormLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from "react-hook-form";
import firebase from '../Config/firebaseConfig'
import { useState } from 'react';
import { genres } from '../Utils/moviesInfo';

function AddMovies(){

    const [genre, setGenre] = useState('');

    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try{
            const document = await firebase.firestore().collection("movies")
            .add(data)
            console.log(document)
        }
        catch(e){
            console.log(e)
        }
    };

    return(
        <Container sx={{mt:5}}>
            <div>{errors.name && <span>Movie title is required</span>}</div>
            <div>{errors.img && <span>Movie image is required</span>}</div>
            <div>{errors.director && <span>Movie director is required</span>}</div>
            <div>{errors.year && <span>Movie year is required</span>}</div>
            <div>{errors.genre && <span>Movie genre is required</span>}</div>
            <div>{errors.score && <span>Movie score is required</span>}</div>
            <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
            '& .MuiTextField-root': { mt: 5, mx: 1},
            }}
            noValidate
            autoComplete="on"
            >
                <div>
                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label={"Movie Title"}
                        {...register("name", { required: true })}
                    /> 

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Movie IMG"
                        defaultValue=""
                        {...register("img", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Director"
                        defaultValue=""
                        {...register("director", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Year"
                        defaultValue=""
                        {...register("year", { required: true })}
                    />

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-select-currency"
                        select
                        label="Select the Genre"
                        {...register("genre", { required: true })}
                        value={genre}
                        onChange={handleChange}
                    >
                    {genres.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                        sx={{width: '30ch'}}
                        required
                        id="outlined-required"
                        label="Score"
                        defaultValue=""
                        {...register("score", { required: true })}
                    />

                    <div>
                        <TextField
                            sx={{width: {xs:'30ch', sm:'55ch'}}}
                            id="outlined-multiline-static"
                            label="Argument"
                            multiline
                            rows={6}
                            defaultValue=""
                            {...register("argument", { required: true })}
                        />
                    </div>

                    <div>
                        <FormLabel sx={{mt: 5}} component="legend">More information</FormLabel>
                        
                        <FormControlLabel
                            value="Alien/UFO"
                            control={<Checkbox />}
                            label="Alien/UFO"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Based on real events"
                            control={<Checkbox />}
                            label="Based on real events"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Kidnapping"
                            control={<Checkbox />}
                            label="Kidnapping"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Lovecraftian"
                            control={<Checkbox />}
                            label="Lovecraftian"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Witchcraft"
                            control={<Checkbox />}
                            label="Witchcraft"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Cult"
                            control={<Checkbox />}
                            label="Cult"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Religion/Paganism"
                            control={<Checkbox />}
                            label="Religion/Paganism"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Demons/Possessions"
                            control={<Checkbox />}
                            label="Demons/Possessions"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Myth/Legend"
                            control={<Checkbox />}
                            label="Myth/Legend"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Stephen King"
                            control={<Checkbox />}
                            label="Stephen King"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Based on a novel"
                            control={<Checkbox />}
                            label="Based on a novel"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Serial killer"
                            control={<Checkbox />}
                            label="Serial killer"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Saga"
                            control={<Checkbox />}
                            label="Saga"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Classic"
                            control={<Checkbox />}
                            label="Classic"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Vampires"
                            control={<Checkbox />}
                            label="Vampires"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Ghosts"
                            control={<Checkbox />}
                            label="Ghosts"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Haunted House"
                            control={<Checkbox />}
                            label="Haunted House"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Monster"
                            control={<Checkbox />}
                            label="Monster"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Dolls"
                            control={<Checkbox />}
                            label="Dolls"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Diabolical kids"
                            control={<Checkbox />}
                            label="Diabolical kids"
                            {...register("about")}
                            labelPlacement="bottom"
                        />

                        <FormControlLabel
                            value="Surrealism"
                            control={<Checkbox />}
                            label="Surrealism"
                            {...register("about")}
                            labelPlacement="bottom"
                        />
                    </div>

                    <div>
                        <TextField
                            sx={{width: {xs:'30ch', sm:'55ch'}}}
                            id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            rows={6}
                            defaultValue=""
                            {...register("comments")}
                        />
                    </div>

                    <div>
                    <Button
                        type='submit'
                        sx={{mt: 3, mb:3}}
                        size="small"
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        >
                        Save
                    </Button>
                    </div>

                </div>
            </Box>
      </Container>
    )
}

export default AddMovies