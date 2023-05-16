import React from 'react'
import Navbar from "./Navbar"

import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
     <Grid bg={'gray.500'} templateColumns={"repeat(6,1fr)"}>
    <GridItem
    as={'aside'}
    colSpan={{base:'6',lg:'2',xl:'1'}}
    bg={'purple.400'}
    minHeight={{lg:'100vh'}}
    p={{base:'20px',lg:'30px'}}
    >
    <Sidebar />
    </GridItem>
    
    <GridItem as={'aside'}
      colSpan={{base:'6',lg:'4',xl:'5'}}
     p={'40px'}>
      
   
      
    <Navbar />

    <Outlet />
    {/* <Dashboard /> */}
    </GridItem>

  </Grid>
  
  
   
  </>
  )
}

export default RootLayout