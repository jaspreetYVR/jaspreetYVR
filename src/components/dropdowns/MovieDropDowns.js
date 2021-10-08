import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"


const MovieDropDowns = (props) => {
  let [option, setOption] = React.useState("popular")

  return (
    <VStack alignItems="center" space={4} mt={20} paddingBottom={5}>
      <Select
        selectedValue={option}
        minWidth="200"
        accessibilityLabel="Choose option"
        placeholder="Choose option"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
            setOption(itemValue);
            props.onChange(itemValue)
        }}>
        <Select.Item label="now playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </VStack>
  )
}

export default MovieDropDowns;

