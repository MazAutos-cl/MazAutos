import React, { useContext, useState } from 'react';
import { Container, Typography, Divider, CardContent , CardMedia, Card, CardActionArea, Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { LoadingBar } from '../loadingBar/LoadingBar';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/PoolsContext';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const PoolEditor = () => {

    const { pools, setPools, amount,setAmount } = useContext(MyContext);
    const { id } = useParams()
    const poolIdsAsString = pools.map(pool => String(pool.id));
    const index = poolIdsAsString.findIndex((poolId) => poolId === id);
    const poolDetails = pools[index];
    const formattedPrice = parseFloat(poolDetails.price).toLocaleString("de-DE");
    const formattedSavedPrice = parseFloat(poolDetails.saved_price).toLocaleString("de-DE");
    const carAvailability = poolDetails.quantity - poolDetails.goal_quantity

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        uploadFile(file);
      };
    
      const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('File uploaded successfully:', response.data);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      const [brand,setBrand] = useState('')
      const [model,setModel] = useState('')
      const [year,setYear] = useState('')
      const [type,setType] = useState('')
      const [fuel,setFuel] = useState('')
      const [capacity,setCapacity] = useState('')
      const [seatings,setSeatings] = useState('')
      const [range,setRange] = useState('')
      const [version,setVersion] = useState('')
      const [transmission,setTransmission] = useState('')
      const [engine,setEngine] = useState('')
      const [price,setPrice] = useState('')
      const [savedPrice,setSavedPrice] = useState('')
      const [goal,setGoal] = useState('')
      const [quantity,setQuantity] = useState('')

    //   setBrand(poolDetails.brand)
    //   setModel(poolDetails.model)
    //   setYear(poolDetails.year)
    //   setType(poolDetails.type)
    //   setFuel(poolDetails.fuel)
    //   setCapacity(poolDetails.capacity)
    //   setSeatings(poolDetails.seatings)
    //   setRange(poolDetails.range)
    //   setVersion(poolDetails.version)
    //   setTransmission(poolDetails.transmission)
    //   setEngine(poolDetails.engine)
    //   setPrice(poolDetails.price)
    //   setSavedPrice(poolDetails.saved_price)
    //   setGoal(poolDetails.goal_quantity)
      
  return (
    <Container sx={{
        minHeight:'100vh',
        py:2
    }}>
        <CardActionArea key={poolDetails.id}>
            <Card sx={{
                    maxWidth: '90vw', 
                    maxHeight:'100vh',
                    textAlign:'center',
                    margin: '0 auto',
                    // display:'flex',
                    // flexDirection:'column',
                    // justifyContent:'center',
                    // alignItems:'center',
                    overflow: 'auto',
                    border:'solid 0.5px #b0bec5',
                    borderRadius:'15px'
                }}>
            
            {/* Seccion de la imagen */}
            <Box sx={{
                display:'flex',
                justifyContent: 'space-between',
                alignItems:'center',
                px:{xs:4, md:6, lg:8},
                py:2
            }}>
                <CardMedia
                    component="img"
                    src={`${poolDetails.image}`}
                    alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
                    sx={{
                        mt:1,
                        maxWidth:'240px',
                        minHeight:'160px',
                        maxHeight:'240px',
                        border:'solid 1px #CFD8DB',
                        borderRadius:'15px',
                        py:1,
                        px:0.5
                    }}
                />
                <Button
                component="label"
                variant="outlined"
                sx={{
                    width:'30%'
                }}
                >
                Cambiar foto
                <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                </Button>
            </Box>
            <Box id='pool-car' component='form'sx={{
                border:'solid 1px #CFD8DB',
                borderRadius:'15px',
                display:'flex',
                flexWrap: 'wrap',
                justifyContent:'space-around',
                alignItems:'center',
                px:2,
                mx:2,
                py:2
            }}>
                <TextField 
                    id='brand'
                    label='Marca del auto'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.brand}
                    // value={brand}
                    onChange={(e)=> setBrand(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='model'
                    label='Modelo del auto'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.model}
                    // value={model}
                    onChange={(e)=> setModel(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='year'
                    label='Año de fabricación'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.year}
                    // value={year}
                    onChange={(e)=> setYear(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='type'
                    label='Tipo de vehículo'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.type}
                    // value={type}
                    onChange={(e)=> setType(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='fuel'
                    label='Combustible'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.fuel}
                    // value={fuel}
                    onChange={(e)=> setFuel(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='capacity'
                    label='Capacidad de carga'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.capacity}
                    // value={capacity}
                    onChange={(e)=> setCapacity(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='seatings'
                    label='Asientos'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.seatings}
                    // value={seatings}
                    onChange={(e)=> setSeatings(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='range'
                    label='Autonomía'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.range}
                    // value={range}
                    onChange={(e)=> setRange(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='version'
                    label='Versión del vehículo'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.version}
                    // value={version}
                    onChange={(e)=> setVersion(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'96%'
                    }}
                />
                <TextField 
                    id='transmission'
                    label='Transmisión del vehículo'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.transmission}
                    // value={transmission}
                    onChange={(e)=> setTransmission(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'96%'
                    }}
                />
                <TextField 
                    id='engine'
                    label='Motor'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.engine}
                    // value={engine}
                    onChange={(e)=> setEngine(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'96%'
                    }}
                />
            </Box>
            <Box id='pool-info' component='form'sx={{
                border:'solid 1px #CFD8DB',
                borderRadius:'15px',
                display:'flex',
                flexWrap: 'wrap',
                justifyContent:'space-around',
                alignItems:'center',
                p:2,
                m:2,
            }}>
                <TextField 
                    id='price'
                    label='Precio final'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.price}
                    // value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='model'
                    label='Ahorro por auto'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.saved_price}
                    // value={savedPrice}
                    onChange={(e)=> setSavedPrice(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
                <TextField 
                    id='year'
                    label='Meta de reservas'
                    type='text'
                    variant='outlined'
                    defaultValue={poolDetails.goal_quantity}
                    // value={goal}
                    onChange={(e)=> setGoal(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'46%'
                    }}
                />
            </Box>

            {/* Seccion de vista previa */}
                <CardContent sx={{textAlign:'left'}}>
                    <CardMedia
                        component="img"
                        src={`${poolDetails.image}`}
                        alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
                        sx={{
                            my:1,
                            maxHeight:'2300px',
                            maxWidth:'430px',
                            px:'60px',
                            border:'solid 1px #b0bec5',
                            borderRadius:'15px',
                            m:"auto auto",
                        }}
                    />
                    <Box sx={{
                        mt:4
                    }}>
                        <Typography  variant='h5' 
                            sx={{ fontSize:'1.2rem'
                                }}>
                            {poolDetails.brand} {poolDetails.model} {poolDetails.year}
                        </Typography>
                        <Typography variant='h5' 
                            sx={{fontSize:'0.8rem'
                                }}>
                            {poolDetails.version}
                        </Typography>
                    </Box>
                    <Box>

                    </Box>
            </CardContent>
            <Divider variant="middle"/>
                
                    {/* Seccion de precio */}
            <CardContent>
                    <Box 
                    sx={{
                        textAlign: "left"
                    }}>
                        <Typography variant='h6' sx={{
                            fontSize:'1.2rem'    
                        }}>
                            Precio 
                        </Typography>
                        <Typography variant='h4' sx={{
                            fontSize:'1.6rem',
                            fontWeight:'500',
                            pt:1,
                            pb:1
                        }}>
                        $ {formattedPrice}
                        </Typography>
                        <Box sx={{                        
                                pt:1,
                                pb:2,            
                                display:'flex',
                                alignItems:'end'}}>
                            <Typography variant='p' sx={{
                                mr:'0.8rem'
                            }}> 
                                Ahorro
                            </Typography>
                            <Typography sx={{
                                    textDecoration: 'none',
                                    fontSize:'0.8rem',
                                    mr:'0.2rem'
                                }}>$
                                </Typography>
                            <Typography variant='p' sx={{
                                textDecoration: 'line-through',
                            }}>
                                {formattedSavedPrice}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display:'flex',
                            alignItems:'center'
                            }}>
                            <IconButton color="primary" sx={{p: 0, m: 0}}>
                                <InfoIcon sx={{paddingRight:'10px'}}/>
                            </IconButton>
                            <Typography variant='p' sx={{
                                fontSize:'0.8rem'
                            }}>
                                Al unirte al pool obtienes el precio de flota.
                            </Typography>
                        </Box>
                    </Box>
            </CardContent>
            <Divider variant="middle"/>
                


                <LoadingBar value={0} goal={poolDetails.goal_quantity} />

            

                {/* Seccion de boton */}
            <CardContent>
                    {/* {showButtons()} */}
            </CardContent>
            </Card>
        </CardActionArea>
    </Container>
  )
}

export default PoolEditor