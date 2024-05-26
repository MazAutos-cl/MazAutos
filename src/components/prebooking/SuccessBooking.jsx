import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

const SuccessBooking = () => {
  return (
    <Box sx={{
        width:'100vw',
        minHeight:'80vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        p:4,
    }}>
        <Grid container gap={9} sx={{
            p:2,
            borderRadius:'15px',
            border:'solid 1px #CFD8DB',
            m:'auto auto',
            bgcolor:'blue',
        }}>
            <Grid item xs={4} sx={{
                bgcolor:'lightgrey',
                p:2,
                borderRadius:'15px',
                border:'solid 1px #CFD8DB',
            }}>
                <Typography>
                    Hola
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{
                bgcolor:'lightgrey',
                p:2,
                borderRadius:'15px',
                border:'solid 1px #CFD8DB',
            }}>
                <Typography>
                    Hola
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SuccessBooking