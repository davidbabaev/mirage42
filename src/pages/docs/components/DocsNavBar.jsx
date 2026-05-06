import { BorderBottom, BorderColor } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

export default function DocsNavBar() {
  return (
    <Box sx={{
      width: '100%',
      borderBottom: '0.5px solid',
      borderBottomColor: 'divider',
      p:2,
    }}>
      <Box sx={{
        display: 'flex',
        gap: 2
      }}>
        <Button startIcon={<GitHubIcon/>} variant='contained'>GitHub</Button>
        <Button startIcon={<YouTubeIcon/>} variant='contained'>Youtube</Button>
        <Button startIcon={<AddToDriveIcon/>} variant='contained'>Drive Docs</Button>
        <Button startIcon={<HomeIcon/>} variant='contained'>App Preview</Button>
      </Box>  
    </Box>
  )
}
