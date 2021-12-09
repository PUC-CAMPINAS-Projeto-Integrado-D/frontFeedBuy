import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { useState } from 'react';
import { axiosPost } from '../../Service/service';

const Login = () => {
    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('');

    const link = 'http://localhost:3001/v1/public/login';
    const toast = useToast();
    const clicked = async ()=>{
        try{
            const resposta = await axiosPost(
                link, // Colocar o link aqui
                {
                    Usuario,
                    Senha,
                }
            );
            localStorage.setItem('autentication', JSON.stringify(resposta));
            toast({
              title: 'Acesso permitido',
              description: "Entrando...",
              position: 'top-left',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
            setTimeout(()=>{
                window.location.href = '../';
            }, 900);
        }catch(ex){
            toast({
              title: 'Dados inválidos',
              description: "Verifique se os dados de acesso são válidos",
              position: 'top-left',
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
            console.error(ex);
        }
    }

    return(
        <ChakraProvider>

        <Header/>
        <Flex
        minH={'65vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        >

        <Stack spacing={8} mx={'auto'} width={'500px'} py={12} px={6}>
        <Stack align={'center'}>
        <Heading>Seja bem-vindo(a)</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
        faça seu login abaixo
        </Text>
        </Stack>
        <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
        <FormControl id="email">
        <FormLabel>Email ou Username</FormLabel>
        <Input value={Usuario} onInput={e => setUsuario(e.target.value)} type="email" />
        </FormControl>
        <FormControl id="password">
        <FormLabel>Senha</FormLabel>
        <Input value={Senha} onInput={e => setSenha(e.target.value)} type="password" />
        </FormControl>
        <Stack spacing={10}>
        <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
        <Checkbox>Continuar conectado</Checkbox>
        <Link color={'blue.400'}>Esqueceu a senha?</Link>
        </Stack>

        <Button
        onClick={clicked}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={'white'}
        _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
        }}>
        Entrar
        </Button>
        </Stack>
        </Stack>
        </Box>
        </Stack>
        </Flex>

        <Footer/>
        </ChakraProvider>
    );
};

export default Login;
