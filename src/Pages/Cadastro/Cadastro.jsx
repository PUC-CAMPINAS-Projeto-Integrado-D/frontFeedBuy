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
import { axiosPost } from '../../Service/service';

const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Fone, setFone] = useState('');
    const [Documento, setDocumento] = useState('');
    const [Usuario, setUsuario] = useState('');

    const link = 'http://localhost:3001/v1/public/register';
    const clicked = async ()=>{
        try{
            const resposta = await axiosPost(
                link, // Colocar o link aqui
                {
                    Nome,
                    Email,
                    Senha,
                    Fone,
                    Documento,
                    Usuario
                }
            );
            console.log(resposta);
            localStorage.getItem('autentication', JSON.stringify(resposta));
        }catch(ex){
            console.error(ex);
        }
    }
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
          <Stack spacing={6}>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input value={Nome} onInput={e => setNome(e.target.value)} type="text" />
            </FormControl>
          </Box>
            <Box>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input value={Usuario} onInput={e => setUsuario(e.target.value)} type="text"/>
                </FormControl>
            </Box>
            <Box>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input value={Email} onInput={e => setEmail(e.target.value)} type="email" />
                </FormControl>
            </Box>
            <Box>
                <FormControl id="documento" isRequired>
                    <FormLabel>Documento</FormLabel>
                    <Input value={Documento} onInput={e => setDocumento(e.target.value)} type="text"/>
                </FormControl>
            </Box>
            <Box>
                <FormControl id="telefone" isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input value={Fone} onInput={e => setFone(e.target.value)} type="tel"/>
                </FormControl>
            </Box>

            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input value={Senha} onInput={e => setSenha(e.target.value)} type={showPassword ? 'text' : 'password'} />
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
                }}
                onClick={clicked}>
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
