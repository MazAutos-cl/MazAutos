import React, { useContext } from 'react';
import { Grid, Container } from '@mui/material'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PoolCard from '../poolcard/PoolCard';
import { MyContext } from "../../context/PoolsContext";

const Pools = () => {

  const {pools} = useContext(MyContext);

  return (
    <Container maxWidth="" id="pools" xs={{width:'100vw'}} md={{width:'90vw'}} sx={{
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
                {pools.map((p) => (
                    <Grid item xs={12} md={3.8} sx={{ mb: 2, mt: 2 }} key={p.id}>
                      <PoolCard pool={p} />
                    </Grid>
                ))}
        </Grid>
    </Container>
  );
}

export default Pools;
