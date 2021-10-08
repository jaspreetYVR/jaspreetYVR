import { FlatList ,Text, View} from "native-base";
import React from "react";
import ShowsCard from '../listItems/ShowsCard'
const ShowsList = (props) => {
    return(
        <View>
            {/* <Text>{props.data[0].title}</Text> */}
            <FlatList width="100%"
                data={props.data}
                renderItem={({item}) => (
                    <ShowsCard  title={item.name} image={item.poster_path} popularity={item.popularity} release={item.release_date} navigation = {props.navigation} id = {item.id}/>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ShowsList;