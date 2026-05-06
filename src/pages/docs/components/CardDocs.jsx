import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function CardDocs({label, text, array, title}) {
  return (
    <Paper 
        elevation={3}
        sx={{p:3, borderRadius: 3}}
    >
        <Typography fontSize={18} fontWeight={700}>{title}</Typography>
        <Divider sx={{my:2}}/>
          {array.map((item) => (
            <Box sx={{display: 'flex', pb: 0.5}} key={item.label}>
                <ArrowRightIcon/>
                <Typography sx={{pr: 1, fontSize: 14}} fontWeight={700}>{item.label}</Typography>
                <Typography fontSize={14}>{item.text}</Typography>
            </Box>
          ))}
      </Paper>
  )
}
