import React from 'react'
import Booking from '../../components/booking/Booking'
import { Box } from '@mui/material';

const Bookings = () => {
  return (
    <>
      <Box sx={{
        height:'100vh',
        bgcolor:'#eceff1',
        py:2
      }}>
        <Booking/>
      </Box>
    </>
  )
}

export default Bookings