import React from 'react';
import CardProduct from '../../Components/CardProduct';
import { ChakraProvider } from '@chakra-ui/react';
import './viewproduct.css';

const ViewProduct = () => {
  return(
    <ChakraProvider>
    <div className='left'><CardProduct/></div>
    <div className='right'>Descrição</div>
    </ChakraProvider>
  )
}

export default ViewProduct;
