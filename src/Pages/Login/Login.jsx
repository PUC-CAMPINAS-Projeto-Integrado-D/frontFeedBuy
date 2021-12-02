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
  } from '@chakra-ui/react';

const Login = () => {
     return(
        <ChakraProvider>
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Continuar conectado</Checkbox>
              </Stack>
              <Button
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
</ChakraProvider>  
    );
};

export default Login;