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

  
const CadastroProduto = () => {
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
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Mudar Foto</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="productName" isRequired>
          <FormLabel>Nome do Produto</FormLabel>
          <Input
            type="text"
          />
        </FormControl>
        <FormControl>
            <FormLabel>Marca do Produto</FormLabel>
            <Input type="text"/>    
        </FormControl>
        <FormControl>
            <FormLabel>Preço</FormLabel>
            <Input type="number"/>
        </FormControl>
        <FormControl>
            <FormLabel>Quantidade</FormLabel>
            <Input type="number"/>
        </FormControl>
        <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea/>
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