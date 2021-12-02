import React from 'react'; 
import { ChakraProvider } from '@chakra-ui/react';
import { Divider } from "@chakra-ui/react"
import CardProduct from '../../Components/CardProduct';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './Feed.css';

const Feed = () => {
    return (
        <>
            <ChakraProvider>
                <header> 
                    <Header/>
                </header>

                <body>
                    <div className = 'cardproduct-feed'>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </div>
                    <div className = 'cardproduct-feed'>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </div>
                </body>

                <footer>
                    <Divider orientation="horizontal"/>
                    <Footer/>
                </footer>
            </ChakraProvider>
        </>
    );
};

export default Feed;