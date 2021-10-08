import {Center, Container,Text} from 'native-base';
import React, { useState,useEffect } from 'react';
import MovieDropDowns from '../dropdowns/MovieDropDowns';
import MovieList from '../list/MovieList';


const Movies = ({navigation}) => {

    const [isLoading,setIsLoading] = useState(false);
    const [movies,setMovies] = useState([])

    const fetchMovies = async (itemValue = 'popular') => {
        const url = `https://api.themoviedb.org/3/movie/${itemValue}?api_key=53576b0bc48e683ea2e51743dc02d95d&language=en-US&page=1`;
        const api_call = await fetch(url)
        const response = await api_call.json();
        setMovies(response.results);
    }

    useEffect( () => {
        fetchMovies();
    },[]);

    return(
        <Container width="100%">
            <Center>
                <MovieDropDowns onChange = {fetchMovies}/>
                { movies != [] ? <MovieList data = {movies} navigation = {navigation}/> : 'loading.......'}
            </Center>
        </Container>
    )
}

export default Movies;