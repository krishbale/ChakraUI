import { Box, Flex, Heading,Text,Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex as={'nav'} alignItems={'center'} gap={'10px'} p={'10px'}>
        <Heading as={'h1'}>Balkrishna Task</Heading>
        <Spacer />
        <HStack spacing={'20px'}>
        <Box bg={"gray.200"} p={"10px"}>M</Box>
        <Text >krishz70@gmail.com</Text>
        <Button colorScheme='purple'>Logout</Button>
        </HStack>
       

    </Flex>
    // <Flex alignItems={'center'} wrap={'wrap' } gap={2} justifyContent={'center'} bg="gray.200">
    //     <Box w="150px" bg="red.400" h="50px">1</Box>
    //     <Box w="150px" bg="blue.400" h="50px">1</Box>
    //     <Box w="150px" bg="green.400" flexGrow={1} h="50px">1</Box>
    //     <Box w="150px" bg="yello.400" flexGrow={2} h="50px">1</Box>
    //     <Box w="150px" bg="orange.400" h="50px">1</Box>
    // </Flex>
  )
}

export default Navbar