import React from 'react'; 
import { ChakraProvider } from '@chakra-ui/react';
import CardProduct from '../../Components/CardProduct';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <ChakraProvider>
            <CardProduct/>
            <Footer/>
        </ChakraProvider>
    );
};

export default Home;