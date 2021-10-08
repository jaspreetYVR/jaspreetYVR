import React, { useEffect,useState } from "react";
import { Text, Box,Center,Image } from "native-base";

const ShowTv = ({navigation, route}) => {
    const {id} = route.params;

    console.log("id is : ", id);
    const [media,setMedia] = useState({
        name:'',
        overview:'',
        popularity:'',
        first_air_date: '',
        poster_path:''
    })

    const fetchMedia = async (id) => {
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=53576b0bc48e683ea2e51743dc02d95d&language=en-US&page=1`;
        const api_call = await fetch(url)
        const response = await api_call.json();
        console.log('title : ' , response);
        setMedia(response);
    }

    useEffect(() => {
        fetchMedia(id);
    },[id])

    return(
        <>
            <Box width='100%' p={7}>
                <Center>
                    <Text fontSize = "xl" fontWeight="bold" paddingBottom={7}>{media.name}</Text>
                    { media.poster_path ?  <Image source = {{ uri:`https://image.tmdb.org/t/p/w500/${media.poster_path}` }} alt={media.title} size='2xl'/> : 'Loading...'}
                    <Text p={5}>{media.overview}</Text>
                    <Text>Popularity: {media.popularity} | Release Date: {media.first_air_date}</Text>
                </Center>
            </Box>
        </>
    )
}


export default ShowTv;