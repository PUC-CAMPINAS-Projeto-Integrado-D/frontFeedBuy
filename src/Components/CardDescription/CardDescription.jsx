import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { Divider } from "antd";

const CardDescription = () => {

    const cartS = localStorage.getItem('cart') ?? '[]';
    const cart = JSON.parse(cartS);

    return(
        <ChakraProvider>
            <Box>
                <Image imageURL={'http://localhost:3001/v1/public/media/'+cart.imageURL} />
                <Divider orientation='vertical'/>
                <Text>
                    <h1>{cart.description}</h1>
                    <h3>{cart.price}</h3>
                </Text>
            </Box>
        </ChakraProvider>
    );
};

export default CardDescription;