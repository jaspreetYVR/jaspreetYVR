import React, { useEffect, useState } from 'react';
import ShowsList from '../list/ShowsList';
import {Center, Container,Text} from 'native-base';
import ShowsDropDown from '../dropdowns/ShowsDropDown';


const TvShows = ({navigation}) => {
    const [shows,setShows] = useState([]);

    const fetchShows = async (itemValue='popular') => {
        const url = `https://api.themoviedb.org/3/tv/${itemValue}?api_key=53576b0bc48e683ea2e51743dc02d95d&language=en-US&page=1`;
        const api_call = await fetch(url)
        const response = await api_call.json();

        setShows(response.results);
    }

    
    useEffect( () => {
        fetchShows();
    },[]);
    

        return(
            <Container width="100%">
                <Center>
                    <ShowsDropDown onChange = {fetchShows}/>
                    { shows != [] ? <ShowsList navigation = {navigation} data = {shows}/> : 'loading.......'}
                </Center>
            </Container>
        )
}

export default TvShows;