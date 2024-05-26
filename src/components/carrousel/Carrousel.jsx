import React from 'react'
import { Grid, Container } from '@mui/material'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PoolCard from '../poolcard/PoolCard';

const Carrousel = () => {
  return (
    <Container maxWidth="" xs={{width:'100vw'}} md={{width:'90vw'}} sx={{
          display:'flex',
          justifyContent:'center',
          bgcolor:'#eceff1'
        }}>
        <Grid container sx={{
            p:1,
            m:1,
            display:'flex',
            justifyContent:'space-evenly'
          }}>
            <Grid item xs={12} md={3.8} sx={{ mb: 2, mt: 2 }}>
                <PoolCard/>
            </Grid>
            <Grid item xs={12} md={3.8} sx={{ mb: 2, mt: 2 }}>
                <PoolCard/>
            </Grid>
            <Grid item xs={12} md={3.8} sx={{ mb: 2, mt: 2 }}>
                <PoolCard/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Carrousel