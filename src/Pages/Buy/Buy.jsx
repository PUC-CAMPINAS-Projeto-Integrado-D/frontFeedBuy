import React from 'react'; 
import { ChakraProvider, Divider, Image, Button, Select } from '@chakra-ui/react';

import {BsBag} from 'react-icons/bs';
import {BsChatSquare} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ImgIphone from '../../Images/iphone-13-pro-max-silver-select.jpeg';

import './Buy.css';

const Buy = () => {
    return (
        <>
            <ChakraProvider>
                <header> 
                    <Header/>
                </header>

                <body className='bodyBuy'>
                    <Image
                        className='imageBuy'
                        src={ImgIphone}
                    />
                    
                    <div className='aboutBuy'>
                        <h1>Apple</h1>
                        <h3>Iphone 13 - Pro-Max Silver 128 GB</h3>
                        <h3>R$ 7.000,00</h3>
                        <h4>10x de 700,00</h4>

                        <Button className='btnBuy' rightIcon={<BsBag/>} colorScheme="black" variant="outline"> BUY NOW </Button>
                    
                        <div className='btnQCF'>
                            <Button className="btnChat" rightIcon={<BsChatSquare size={'20px'}/>}/>
                            <Button className="btnFavorito" rightIcon={<FaRegHeart size={'20px'}/>}/>
                        </div>

                    </div>

                </body>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <footer>
                    <Divider orientation="horizontal"/>
                    <Footer/>
                </footer>
            </ChakraProvider>
        </>
    );
};

export default Buy;
