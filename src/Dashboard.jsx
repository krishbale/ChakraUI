import { Box, Button, Container, Heading, SimpleGrid, Text, filter } from '@chakra-ui/react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

 const  Dashboard = () => {
  const tasks = useLoaderData();
  
    
  return (

    <SimpleGrid p={'10px'} spacing={10} minChildWidth={'300px'} >
    {tasks && tasks.map((task) =>(
      <div id='task.id'>{task.title}</div>
    )
    )}
    </SimpleGrid>
   
  )
}
export default Dashboard;

