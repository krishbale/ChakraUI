import { Box, Button, Container, Heading, Text, filter } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
    const buttonsytle = {
     P:"5px",
    //  bg:"red.500",
    fliter:"blur(8px)",
    textAlign:"center",
    // filter:'blur(2px)',
    ":hover":{
        color:"red.500"

    }
    }
  return (

    <Container >
        <Heading   mx="50px" my='5rem' p="10px">Dashboard</Heading>
        <Text color='blue.400'>Get Started with Chakra UI</Text>
        <Box >
        <Button sx={buttonsytle}>Active</Button>
        <Button   fontWeight="bold">DeActive</Button>
        </Box>
    </Container>
   
  )
}

export default Dashboard