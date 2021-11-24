import React from 'react'; 
import { ChakraProvider } from '@chakra-ui/react';
import { Divider } from "@chakra-ui/react"
import CardProduct from '../../Components/CardProduct';
import Footer from '../../Components/Footer';

const Buy = () => {
    return (
        <>
            <ChakraProvider>
                <CardProduct/>

                <footer>
                    <Divider orientation="horizontal"/>
                    <Footer/>
                </footer>
            </ChakraProvider>
        </>
    );
};

export default Buy;
