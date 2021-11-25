import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    ChakraProvider,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
    <ChakraProvider>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            FeedBuy
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Faça seu Registro abaixo
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Sobrenome</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <Box>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text"/>    
                </FormControl>        
            </Box>
            <Box>
                <FormControl id="documento" isRequired> 
                    <FormLabel>Documento</FormLabel>
                    <Input type="text"/>
                </FormControl>
            </Box>
            <Box>
                <FormControl id="nascimento" isRequired>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input type="Date"/>
                </FormControl>
            </Box>
            <Box>
                <FormControl id="telefone" isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input type="tel"/>
                </FormControl>
            </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'gray.700',
                }}>
                Registrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </ChakraProvider>
    );
}

export default Cadastro;
