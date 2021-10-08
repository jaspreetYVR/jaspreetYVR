import {Center, Container,Box, ScrollView} from 'native-base';
import React, { useState } from 'react';
import Form from '../forms/Form';
import MovieList from '../list/MovieList';
import ShowsList from '../list/ShowsList';

const MoviesShowsContainer = ({navigation}) => {

    const [resultOutput,setResultOutput] = useState([])
    const [option,setOption] = useState('');

    const fetchResult = async (searchQuery, optionChoosed='movie') => {
        const url = `https://api.themoviedb.org/3/search/${optionChoosed}/?api_key=53576b0bc48e683ea2e51743dc02d95d&query=${searchQuery}`;
        const api_call = await fetch(url)
        const response = await api_call.json();
        setResultOutput(response.results);
        setOption(searchQuery)
    }

    // const handleInputChange = (searchQuery,optionChoosed) => {
    //     setMovieName(movieName)
    //     console.log('movie', movieName)
    // }

    return(
        <Container >
            <Box>
                <Center>
                    <Form fetchResult={fetchResult} options={option}/>
                </Center>
            </Box>
            <Box>
                <ScrollView width="100%">
                    { option.localeCompare('movies') ? <MovieList data = {resultOutput} navigation={navigation}/> : 'loading.......'}
                    { option.localeCompare('tv') ? <ShowsList data = {resultOutput} navigation = {navigation}/> : 'loading.......'}
                </ScrollView>  
            </Box>
        </Container>
    )
}

export default MoviesShowsContainer;