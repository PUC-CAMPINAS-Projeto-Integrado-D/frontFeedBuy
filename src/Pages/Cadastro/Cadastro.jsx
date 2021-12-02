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
  RadioGroup,
  Radio,
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
            Seja bem-vindo(a)
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            faça seu cadastro para aproveitar tudo!
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
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel as="legend">Selecione o tipo de usuario:</FormLabel>
                <RadioGroup>
                  <Radio value="comprador">Comprador</Radio>
                    <br></br>
                  <Radio value="vendedor">Vendedor</Radio>
                </RadioGroup>
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
                loadingText="Criando conta..."
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
                Criar conta
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                Já é usuário? <Link color={'pink.400'}>Conecte-se</Link>
              </Text>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  </ChakraProvider>
  );
}

export default Cadastro;
