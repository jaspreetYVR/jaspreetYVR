import { FlatList ,Text, View} from "native-base";
import React from "react";
import MovieCard from "../listItems/MovieCard";

const MovieList = (props) => {
    return(
        <View width="100%">
            <FlatList width="100%"
                data={props.data}
                renderItem={({item}) => (
                    <MovieCard  title={item.title} image={item.poster_path} popularity={item.popularity} release={item.release_date} navigation = {props.navigation} id = {item.id}/>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default MovieList;