import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Instruction from './pages/Instruction'
import Features from './pages/Features'
import Technologies from './pages/Technologies'

export default function DocsLayout() {
  return (
        <Box>
        {/* Navbar */}
        {/* ****** */}


        <Routes>
            <Route path='/' element={<Instruction/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/technologies' element={<Technologies/>}/>
        </Routes>
    </Box>
  )
}
