import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  useColorModeValue } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import React, {Fragment, useState} from "react";
import InputMask from "react-input-mask";

import {GoCreditCard} from 'react-icons/go';
import {VscAccount} from 'react-icons/vsc'
import {TiSortNumerically} from 'react-icons/ti'
import {SiGooglepay} from 'react-icons/si';
import {FaApplePay} from 'react-icons/fa';

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import CardProduct from '../../Components/CardProduct';

import './Pay.css';

const Pay = () => {

    const clicked = () => {
      if ((document.getElementById('name').value.length < 3) ||
          (document.getElementById('cep').value.length < 3) ||
          (document.getElementById('num').value.length == 0) ||
          (document.getElementById('cartao').value.length < 3) ||
          (document.getElementById('dataC').value.length < 3) ||
          (document.getElementById('cvc').value.length < 2))
        {
        return <ChakraProvider>
            <Alert
              status='error'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Dados não preenchidos corretamente!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Por favor revise os campos e empreencha novamente
              </AlertDescription>
            </Alert>
          </ChakraProvider>
      } else {
        return <ChakraProvider>
            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Compra realizada com sucesso!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Obrigada por comprar conosco! Você receberá em seu email a confirmação do pedido
              </AlertDescription>
            </Alert>
          </ChakraProvider>
      }
    }

    const cartS = localStorage.getItem('cart') ?? '[]';
    const cart = JSON.parse(cartS);

    return(

      <ChakraProvider>
          <Header/>

          <Center height='620px'>

            <div className='produtos'>

              <div className='produtos-individuais'>
                <br></br>
                {cart.map((item)=>{
                    return <CardProduct
                        name={item.description}
                        imageURL={item.imageURL}
                        price={item.price}
                      />;
                } ) }
              </div>

            </div>

            <Divider orientation='vertical' />

            <div className='pagamento'>

              <div className='botoespay'>
                <Button
                  bg={useColorModeValue('white', 'gray.700')}
                  leftIcon={<SiGooglepay size='40px'/>}
                  width='250px'
                  _hover={{
                    bgGradient: 'linear(to-r, red.100,pink.200)',
                    boxShadow: 'xl',
                    }}
                />
                <Button
                  bg={useColorModeValue('white', 'gray.700')}
                  leftIcon={<FaApplePay size='40px'/>}
                  width='250px'
                  _hover={{
                    bgGradient: 'linear(to-r, red.100,pink.200)',
                    boxShadow: 'xl',
                    }}
                />
              </div>

              <Divider/>

              <br></br>

              <Box>
                <FormControl id='dados'>
                  <FormLabel>Dados Pessoais</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<VscAccount/>}/>
                    <Input type='text' placeholder='Nome do Destinatario'
                      id='name'
                      />
                  </InputGroup>

                  <Input type='text' placeholder= 'CEP' id='cep'
                    as={InputMask} mask="99999-999" maskChar={null}/>

                  <InputGroup>
                    <InputLeftElement children={<TiSortNumerically/>}/>
                    <Input type='text' placeholder='Nº' id='num'
                      as={InputMask} mask="9999" maskChar={null}/>
                  </InputGroup>
                </FormControl>
              </Box>

              <br></br>

              <Box>
                <FormControl id='cartao'>
                  <FormLabel>Dados do Cartão:</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<GoCreditCard/>}/>
                    <Input type='text' placeholder='1234 1234 1234 1234' isRequired
                      id='cartao' as={InputMask} mask="9999 9999 9999 9999" maskChar={null} />
                  </InputGroup>

                  <Input type='text' placeholder='MM/AA' isRequired
                    id='dataC' as={InputMask} mask="99/99" maskChar={null}/>
                  <Input type='text' placeholder='CVC' isRequired
                    id='cvc' as={InputMask} mask="999" maskChar={null}/>
                </FormControl>
              </Box>
              <br></br>

              <Checkbox>Salvar dados para futura compra</Checkbox>
              <br></br>
              <br></br>
              <Button
                width='500px'
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-r, red.300,pink.400)',
                    boxShadow: 'xl',
                }}
                onClick={clicked}>
                  Pagar
              </Button>
            </div>
          </Center>

          <Footer/>

      </ChakraProvider>

      );
};




export default Pay;
