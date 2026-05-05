import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Introduction from './docsPages/Introduction'
import Technologies from './docsPages/Technologies'
import Features from './docsPages/Features'

export default function DocsDashboardLayout() {
  return (
    <Box>
        {/* Navbar */}
        {/* ****** */}


        <Routes>
            <Route path='/' element={<Introduction/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/technologies' element={<Technologies/>}/>
        </Routes>
    </Box>
  )
}
