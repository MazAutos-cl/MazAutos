import React from "react";
import { LinearProgress } from "@mui/material";
//import Box from '@mui/material/Box';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


export const LoadingBar = ({ value,goal }) => {
  return (
    <Box sx={{
      width:'100%', 
      py:2, 
      px:2
    }}>
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        py:0.8
      }}>
        <Typography sx={{fontSize:'0.8rem'}}>
            Reservas: {value}
        </Typography>
        <Typography sx={{fontSize:'0.8rem'}}>
            Flota: {goal}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        goal={10}
        value={(value / goal) * 100}
        sx={{
          height: "1.5rem",
          borderRadius: "5px",
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 6px,
              #ccc 5px,
              #ccc 10px
            )
          `,
          "& .MuiLinearProgress-bar": {
            background: `
            #00ad71`,
          },
        }}
      />
    </Box>
  );
};

// la manera de importarlo        import { LoadingBar } from "@components/loadingBar/LoadingBar.jsx";
// la manera de mandarlo por props    <LoadingBar value={8} />

// obviamente borra este mensaje XD
