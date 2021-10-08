import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
} from "native-base"


const ShowsDropDown = (props) => {
  let [option, setOption] = React.useState("popular")

  return (
      <VStack alignItems="center" space={4} justifyContent='center' mt={20} paddingBottom={5}>
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
        <Select.Item label="Airing today" value="airing_today" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
        <Select.Item label="On The Air" value="on_the_air" />
      </Select>
    </VStack>
  )
}

export default ShowsDropDown;

