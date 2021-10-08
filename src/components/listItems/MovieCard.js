import { Box, Divider, Heading, VStack,Image,HStack,Text, Button } from "native-base";
import React from "react";

const MovieCard = (props) => {
    return(
        <Box  p={5} divider={<Divider />}>
            <HStack space={4} >
                <Box>
                    <Image source = {{uri:`https://image.tmdb.org/t/p/w500/${props.image}`}} alt={props.title} size='xl'/>
                </Box>

                <Box>
                    <VStack>
                        <Text>{props.title}</Text>
                        <Text>Popularity: {props.popularity}</Text>
                        <Text>Release Date: {props.release}</Text>
                        <Button width={200} height={50} onPress={() => props.navigation.navigate('ShowMovie',{
                            id : props.id,
                        })}>More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default MovieCard;