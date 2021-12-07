import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import LogoApple from '../../Images/apple.jpg';

const Perfil = () => {
  return (
    <ChakraProvider>

      <Header/>

      <br></br>
      <br></br>
      <br></br>

      <Center py={6}>
        <Box
          maxW={'450px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={LogoApple}
            alt={'Logo apple'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Iplace - Dom Pedro 
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @iplace_
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Loja oficial e licenciada da Apple, aqui você encontra os melhores preços.
            <br></br>
            Chegou a hora de ter seu Apple! Confira as novidades...
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #apple
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #oficial
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #news
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bgGradient="linear(to-r, red.200,pink.200)"
              _focus={{
                bg: 'red.200',
              }}>
              Chat
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              bgGradient="linear(to-r, red.400,pink.400)"
              boxShadow={
                'linear(to-r, red.400,pink.400)'
              }
              _hover={{
                bgGradient: 'linear(to-r, red.300,pink.300)',
              }}
              _focus={{
                bgGradient: 'linear(to-r, red.200,pink.200)',
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>

      <br></br>
      <br></br>
      <br></br>

      <Footer/>
          
    </ChakraProvider>
  );
}

export default Perfil;
