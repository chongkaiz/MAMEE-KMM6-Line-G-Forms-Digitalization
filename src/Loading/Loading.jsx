import React from 'react'

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
    return (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
            <CircularProgress aria-label='loading-issues' />
            Loading...
        </Box>
    )
}