import React from 'react';
import { ChakraProvider, Divider, Image, Button, Select } from '@chakra-ui/react';

import {BsBag} from 'react-icons/bs';
import {BsChatSquare} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useToast } from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

import './Buy.css';

const Buy = () => {
    const toast = useToast();
    let thisProduct = sessionStorage.getItem('buy');
    if(thisProduct=== null || thisProduct === undefined){
        window.location.href = "./";
        return;
    }
    thisProduct = JSON.parse(sessionStorage.getItem('buy'));
    const ImgIphone = thisProduct.imageURL;

    function AddToCart(){
        var Produto = JSON.parse(sessionStorage.getItem('buy'));
        const cart = localStorage.getItem('cart') ?? '[]';
        const cartFormated = JSON.parse(cart);
        cartFormated.push(Produto);
        localStorage.setItem('cart', JSON.stringify(cartFormated));

        toast({
            title: 'Produto Adicionado ao carrinho!!!',
            status: 'success',
            position: 'top-left',
            duration: 9000,
            isClosable: true,
        });
    }

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
                        <h1>{thisProduct.name}</h1>
                        <h3>R$ {thisProduct.price.toFixed(2)}</h3>
                        <h4>10x de {(thisProduct.price / 10).toFixed(2)}</h4>

                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                    descrição do produto
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2}>
                                {thisProduct.description}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <br></br>

                        <Button className='btnBuy' onClick={AddToCart} rightIcon={<BsBag/>} colorScheme="black" variant="outline"> COMPRAR AGORA </Button>

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
