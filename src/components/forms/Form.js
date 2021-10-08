import { Ionicons } from "@expo/vector-icons";
import { Button, FormControl,HStack, Icon, Input, VStack,Box,CheckIcon,Select, Text } from "native-base";
import React, { useState } from "react";

const Form = props => {
    const {fetchResult, onInputChange} = props;
    const [formData,setFormData] = useState({});
    const [errors, setErrors] = useState();
    const [query,setQuery] = useState('');
    const [option,setOption] = useState('movie');
    const onSubmit = () => {
        fetchResult(query,option);
    }

    return(
        <VStack space={2} width="100%" p={4}> 
            <FormControl isRequired>
                <FormControl.Label fontSize='sm' my={3}>Search Movie/TV Show Name</FormControl.Label>
                <Box>
                        <Input  size="xl" 
                                w = {{
                                    base: "84%",
                                    md: "25%",
                                  }}
                                placeholder="Enter a movie name"
                                variant="filled"
                                bg='gray.200'
                                px={3}
                                width='80%'
                                InputLeftElement={
                                    <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />}/>
                                }
                                onChangeText={value => {
                                    setQuery(value)
                                }}
                        />       
                </Box>
                <Box><Text>Choose Search Type *</Text></Box>
                <Box>
                    <HStack width="100%" space={2} alignItems="center">
                        <VStack alignItems="center" space={4} justifyContent='center'>
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
                                }}>
                                <Select.Item label="Movie" value="movie" />
                                <Select.Item label="Multi" value="multi" />
                                <Select.Item label="TV" value="tv" />
                            </Select>
                        </VStack>

                        <Button onPress={onSubmit} width = {150} height = {50} startIcon={<Icon as={<Ionicons name='ios-search' />} />}>Search</Button>
                    </HStack>
                </Box>
            </FormControl>
        </VStack>
    )
}

export default Form;