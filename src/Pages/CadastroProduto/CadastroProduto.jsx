import React from 'react';
import { Textarea } from "@chakra-ui/react"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    ChakraProvider,
  } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { axiosPost } from '../../Service/service';

const CadastroProduto = () => {

    const [Marca, setMarca] = useState('');
    const [Preco, setPreco] = useState('');
    const [Descricao, setDescricao] = useState('');

    const link = 'http://localhost:3001/v1/private/ad';
    const token = JSON.parse(localStorage.getItem('autentication')).data.data.token;
    const clicked = async ()=>{
        try{
            const resposta = await axiosPost(
                link, // Colocar o link aqui
                {
                    Marca,
                    Preco,
                    Descricao,
                }
                , token
            );
            console.log(resposta);
            localStorage.getItem('autentication');
        }catch(ex){
            console.error(ex);
        }
    }

    return(
        <ChakraProvider>
             <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Cadastro de Produto
        </Heading>
        <FormControl id="userName">
          <FormLabel>Foto Produto</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="">
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Mudar Foto</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl>
            <FormLabel>Marca do Produto</FormLabel>
            <Input value={Marca} onInput={e => setMarca(e.target.value)} type="text"/>
        </FormControl>
        <FormControl>
            <FormLabel>Preço</FormLabel>
            <Input value={Preco} onInput={e => setPreco(e.target.value)} type="number"/>
        </FormControl>
        <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea value={Descricao} onInput={e => setDescricao(e.target.value)} />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.500'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancelar
          </Button>
          <Button
            onClick={clicked}
            bg={'Black'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'gray.600',
            }}>
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
        </ChakraProvider>
    );
}

export default CadastroProduto;
