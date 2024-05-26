//     {/* Seccion de la imagen */}
//     <Box sx={{
//         bgcolor:'#cfd8dc',
//         py:2
//     }}>
//         <CardMedia
//             component="img"
//             height="60%"
//             image= {CarImage}
//             alt="Maxus T60"
//         />
//     </Box>

//     {/* Title */}

//     <CardContent sx={{textAlign:'center'}}>
//         <Typography  variant='h5' sx={{ 
//                 fontSize:'1.2rem',
//                 my:0
//             }}>
//             Maxus T60
//         </Typography>
//     </CardContent>

//     {/* Highlights */}
//     <CardContent>
//         <Box className='highlights' sx={{
//             bgcolor:'#b0bec5',
//             height:'6vh',
//             display:'flex',
//             alignItems:'center',
//             justifyContent:{xs:'center', md:'space-around'},
//             borderRadius:'15px'
//         }}>
//             <Box sx={{
//                 width:{xs:'30%', md:'20%', lg:'15%'},
//                 display:'flex',
//                 alignItems:'center',
//                 justifyContent:'space-around',
//                 color:'#37474f'
//             }}>
//                 <EmojiObjectsIcon/>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     Gasolina
//                 </Typography>
//             </Box>
//             <Box sx={{
//                 width:{xs:'30%', md:'20%', lg:'15%'},
//                 display:'flex',
//                 alignItems:'center',
//                 justifyContent:'space-around',
//                 color:'#37474f'
//             }}>
//                 <EmojiObjectsIcon/>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     Manual
//                 </Typography>
//             </Box>
//             <Box sx={{
//                 width:{xs:'30%', md:'20%', lg:'15%'},
//                 display:'flex',
//                 alignItems:'center',
//                 justifyContent:'space-around',
//                 color:'#37474f'
//             }}>
//                 <EmojiObjectsIcon/>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     1500cc
//                 </Typography>
//             </Box>
//         </Box>
//     </CardContent>
//     <Divider variant="middle"/>

//     {/* Price Section */}

// <CardContent>
//         <Box 
//         sx={{
//             textAlign: "left"
//         }}>
//             <Typography variant='h6' sx={{
//                 fontSize:'1.2rem'    
//             }}>
//                 Precio 
//             </Typography>
//             <Typography variant='h4' sx={{
//                 fontSize:'1.6rem',
//                 fontWeight:'500',
//                 pt:1,
//                 pb:1
//             }}>
//                 $12.000.000
//             </Typography>
//             <Box sx={{                        
//                     pt:1,
//                     pb:2,            
//                     display:'flex',
//                     alignItems:'end'}}>
//                 <Typography variant='p' sx={{
//                     mr:'0.8rem'
//                 }}> 
//                     Ahorro
//                 </Typography>
//                 <Typography sx={{
//                         textDecoration: 'none',
//                         fontSize:'0.8rem',
//                         mr:'0.2rem'
//                     }}>$
//                     </Typography>
//                 <Typography variant='p' sx={{
//                     textDecoration: 'line-through',
//                 }}>
//                     3.000.000
//                 </Typography>
//             </Box>
//             <Box sx={{display:'flex'}}>
//                 <IconButton color="primary" sx={{p: 0, m: 0}}>
//                     <InfoIcon sx={{paddingRight:'10px'}}/>
//                 </IconButton>
//                 <Typography variant='p' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     Al unirte al pool obtienes el precio de flota.
//                 </Typography>
//             </Box>
//         </Box>
// </CardContent>
// <Divider variant="middle"/>

// {/* Details */}

//     {/* Characteristics */}

//     <CardContent>
//         <Grid container sx={{
//             display:'flex',
//             justifyContent:'space-between'
//         }}>
//             <Grid item xs={5.4} md={6}  sx={{
//                     py:1,
//                     px:1,
//                     textAlign:'left',
//                     height:'6.5vh',
//                     display:'flex',
//                     flexDirection:'column',
//                     justifyContent:'space-between'
//                 }}>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem',
//                     fontWeight:'500'
//                 }}>
//                     Espacio de Carga
//                 </Typography>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     360cmc
//                 </Typography>
//             </Grid>
//             <Grid item xs={5.4} md={6}  sx={{
//                     py:1,
//                     px:1,
//                     textAlign:'left',
//                     height:'6.5vh',
//                     display:'flex',
//                     flexDirection:'column',
//                     justifyContent:'space-between'
//                 }}>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem',
//                     fontWeight:'500'
//                 }}>
//                     Espacio de Carga
//                 </Typography>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     360cmc
//                 </Typography>
//             </Grid>
//             <Grid item xs={5.4} md={6}  sx={{
//                     py:1,
//                     px:1,
//                     textAlign:'left',
//                     height:'6.5vh',
//                     display:'flex',
//                     flexDirection:'column',
//                     justifyContent:'space-between'
//                 }}>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem',
//                     fontWeight:'500'
//                 }}>
//                     Espacio de Carga
//                 </Typography>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     360cmc
//                 </Typography>
//             </Grid>
//             <Grid item xs={5.4} md={6}  sx={{
//                     py:1,
//                     px:1,
//                     textAlign:'left',
//                     height:'6.5vh',
//                     display:'flex',
//                     flexDirection:'column',
//                     justifyContent:'space-between'
//                 }}>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem',
//                     fontWeight:'500'
//                 }}>
//                     Espacio de Carga
//                 </Typography>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem'
//                 }}>
//                     360cmc
//                 </Typography>
//             </Grid>
//         </Grid>
//     </CardContent>
//     <Divider variant="middle"/>
    
//     {/* Colors Section */}

//     <CardContent>
//         <Grid container sx={{
//             display:'flex',
//             justifyContent: 'left'
//         }}>
//             <Grid item xs={2.4} md={6}  sx={{
//                     textAlign:'center',
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Typography variant='h4' sx={{
//                     fontSize:'0.8rem',
//                     fontWeight:'500'
//                 }}>
//                     Colors
//                 </Typography>
//             </Grid>
//             <Grid item xs={1.92} md={6}  sx={{
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Box sx={{
//                     height:'36px',
//                     width:'36px',
//                     bgcolor:'black',
//                     border:'solid 2 #252525',
//                     borderRadius:'25px',
//                     fontSize:'36px'
//                 }}>
//                 </Box>
//             </Grid>
//             <Grid item xs={1.92} md={6}  sx={{
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Box sx={{
//                     height:'36px',
//                     width:'36px',
//                     bgcolor:'black',
//                     border:'solid 2 #252525',
//                     borderRadius:'25px',
//                     fontSize:'36px'
//                 }}>
//                 </Box>
//             </Grid>
//             <Grid item xs={1.92} md={6}  sx={{
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Box sx={{
//                     height:'36px',
//                     width:'36px',
//                     bgcolor:'black',
//                     border:'solid 2 #252525',
//                     borderRadius:'25px',
//                     fontSize:'36px'
//                 }}>
//                 </Box>
//             </Grid>
//             <Grid item xs={1.92} md={6}  sx={{
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Box sx={{
//                     height:'36px',
//                     width:'36px',
//                     bgcolor:'black',
//                     border:'solid 2 #252525',
//                     borderRadius:'25px',
//                     fontSize:'36px'
//                 }}>
//                 </Box>
//             </Grid>
//             <Grid item xs={1.92} md={6}  sx={{
//                     height:'6.5vh',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                 }}>
//                 <Box sx={{
//                     height:'36px',
//                     width:'36px',
//                     bgcolor:'black',
//                     border:'solid 2 #252525',
//                     borderRadius:'25px',
//                     fontSize:'36px'
//                 }}>
//                 </Box>
//             </Grid>
//         </Grid>
//     </CardContent>
//     <Divider variant="middle"/>

        
//     {/* Loading bar */}

//     <CardContent sx={{
//         mx:0,
//         px:0
//     }}>

//         <LoadingBar value={5} />

//     </CardContent>

//     {/* Seccion de boton */}

// <CardContent>
//     <Box 
//         sx={{
//             textAlign: "left"
//         }}>
//         <Button variant="contained" sx={{color: 'white',
//             width: '100%',
//             height: '45px', 
//             borderRadius: '10px', 
//             marginBottom: '20px',  
//         }}
//         >
//         <Typography>
//             Reservar
//         </Typography>
//     </Button>
//     </Box>
// </CardContent>