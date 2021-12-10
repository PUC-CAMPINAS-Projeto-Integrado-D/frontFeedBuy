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
  useColorModeValue, } from "@chakra-ui/react";

import React, {Fragment, useState} from "react";
import { axiosPost } from '../../Service/service';
import { useToast } from '@chakra-ui/react'

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {GoCreditCard} from 'react-icons/go';
import {VscAccount} from 'react-icons/vsc'
import {TiSortNumerically} from 'react-icons/ti'
import {SiGooglepay} from 'react-icons/si';
import {FaApplePay} from 'react-icons/fa';

import './Pay.css';

const Pay = () => {

    const [Nome, setNome] = useState('');
    const [CEP, setCEP] = useState('');
    const [Num, setNum] = useState('');
    const [Cartao, setCartao] = useState('');
    const [DataC, setDataC] = useState('');
    const [CVC, setCVC] = useState('');

    //const link = (sessionStorage.getItem('ip') ?? 'http://localhost:3001')+'/v1/public/register';
    const toast = useToast();
    const clicked = async ()=>{
        try{
            const resposta = await axiosPost(
                //link, // Colocar o link aqui
                {
                    Nome,
                    CEP,
                    Num,
                    Cartao,
                    DataC,
                    CVC
                }
            );
            toast({
          title: 'Pedido feito com sucesso! Obrigada!',
          status: 'success',
          position: 'top-left',
          duration: 9000,
          isClosable: true,
        })
            localStorage.getItem('autentication', JSON.stringify(resposta));
        }catch(ex){
            toast({
              title: 'Dados inválidos',
              description: "Verifique se as informações foram digitadas certas",
              position: 'top-left',
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
        }
    }

    return(
      
      <Fragment>
          <Header/>

          <Center height='620px'>

            <div className='produtos'>
              
              COLOCAR OS PRODUTOS DO CARRINHO AQUI  

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
                      value={Nome} onInput={ e =>  setNome(e.target.value)}/>
                  </InputGroup>

                  <Input type='text' placeholder= 'CEP' value={CEP}
                    onInput={ e => setCEP(e.target.value)}/>

                  <InputGroup>
                    <InputLeftElement children={<TiSortNumerically/>}/>
                    <Input type='number' placeholder='Nº' value={Num}
                      onInput= {e => setNum(e.target.value)}/>
                  </InputGroup>
                </FormControl>
              </Box>

              <br></br>

              <Box>
                <FormControl id='cartao'>
                  <FormLabel>Dados do Cartão:</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<GoCreditCard/>}/>
                    <Input type='number' placeholder='1234 1234 1234 1234' isRequired
                      value={Cartao} onInput={e => setCartao(e.target.value)}/>
                  </InputGroup>
                 
                  <Input type='number' placeholder='MM/AA' isRequired
                    value={DataC} onInput={e => setDataC(e.target.value)}/>
                  <Input type='number' placeholder='CVC' isRequired
                    value={CVC} onInput={e => setCVC(e.target.value)}/>
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

      </Fragment>

      );
};

export default Pay;
