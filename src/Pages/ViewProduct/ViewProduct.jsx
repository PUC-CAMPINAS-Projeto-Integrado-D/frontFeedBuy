import React from 'react';
import CardProduct from '../../Components/CardProduct';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Divider } from "@chakra-ui/react"
import './viewproduct.css';

const ViewProduct = () => {
  return(
      <ChakraProvider>
          <header>
              <Header/>
          </header>

          <body>
              <div className='left'><CardProduct/></div>
              <div className='right'>Descrição</div>
          </body>

          <footer>
              <Divider orientation="horizontal"/>
              <Footer/>
          </footer>
      </ChakraProvider>
  )
}

export default ViewProduct;
