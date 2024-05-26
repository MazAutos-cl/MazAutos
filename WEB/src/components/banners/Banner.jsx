import React from 'react'
//import Box from '@mui/material/Box';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import backgroundImage from '../../assets/maxus-t90-banner-home.jpeg';


const Banner = () => {

    const handleScroll = (event) => {
        event.preventDefault();
        const target = document.getElementById('pools');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
        {/* Banner para dispositivos mobile */}

        <Box sx={{ display: { xs: 'flex', sm: 'none' },
        width: '100vw',
        height: '86vh',
        bgcolor: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
            <Button
                variant="contained"
                sx={{color: 'white',
                width: '90vw',
                height: '55px', 
                borderRadius: '15px', 
                marginBottom: '20px',  
                marginTop: '20px'}}
                href='#pools'
            >
                <Typography>
                    Ver maz autos
                </Typography>
            </Button>
        </Box>

        {/* Banner para dispositivos medianos y  desktops */}

    <Box sx={{ display: { xs: 'none', md: 'flex' } ,
    width: '100vw',
    height: '92vh', 
    bgcolor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}>
        <Button
            variant="contained"
            sx={{color: 'white',
            width: '90vw',
            height: '55px', 
            borderRadius: '15px', 
            mb: 8,  
            marginTop: '20px'}}
            onClick={handleScroll}
        >
            <Typography>
                Ver maz autos
            </Typography>
        </Button>
    </Box>
</>
  )
}

export default Banner