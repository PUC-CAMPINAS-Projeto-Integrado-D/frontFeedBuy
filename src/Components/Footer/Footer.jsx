import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    Image,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import logo from '../../Images/FEEDBUY.png'

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image src={logo}/>
              </Box>
              <Text fontSize={'sm'}>
                © 2021 FeedBuy. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>A Empresa</ListHeader>
              <Link href={'#'}>Sobre Nós</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Fale Conosco</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Suporte</ListHeader>
              <Link href={'#'}>Auto Atendimento</Link>
              <Link href={'#'}>Politica de Privacidade</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Receba nossas ofertas!</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Seu email'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                  }}
                  aria-label="Inscrever-se"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
