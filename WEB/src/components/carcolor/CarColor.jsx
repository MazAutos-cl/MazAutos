import React, { useContext } from 'react';
//import Box from '@mui/material/Box';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { MyContext } from '../../context/PoolsContext';

const CarColor = ({ poolDetails, index }) => {
    const { pools, setPools, setAmount } = useContext(MyContext);

    const renderColorGridItems = () => {
        if (!poolDetails || !poolDetails.colors) return null;
    
        const colorMapping = {
            blue: '#1565c0',
            red: '#c62828',
            white: '#fafafa',
            black: '#212121',
            grey: '#bdbdbd'
        };
    
        return poolDetails.colors.map((color, index) => {
            const colorStyle = {
                height: '36px',
                width: '36px',
                bgcolor: colorMapping[color],
                border: 'solid 2px #BDBDBD',
                borderRadius: '25px',
                fontSize: '36px',
            };
    
            return (
                <Grid item key={index} xs={1.92} sx={{
                    height: '6.5vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                            ...colorStyle,
                            background: `linear-gradient(45deg, rgba(122,122,122,0.5) 0%, ${colorMapping[color]} 40%)`,
                        }}></Box>
                </Grid>
            );
        });
    };
    

    return (
        <>
            {renderColorGridItems()}
        </>
    );
};

export default CarColor;
