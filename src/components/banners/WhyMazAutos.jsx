import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import Photo1 from '../../assets/repartidor-contento-por-su-nuevo-carro.jpeg'
import Photo2 from '../../assets/mujer-comprando-un-carro-al-mejor-precio.jpeg'
import Photo3 from '../../assets/v80-cargo.png'
import Photo4 from '../../assets/hombre-compra-auto-para-trabajar.jpeg'
import Photo5 from '../../assets/Maxus-t70-pro.jpeg'
import Photo6 from '../../assets/un-nuevo-propietario-de-camion.jpeg'


const WhyMazAutos = () => {
    const articles = [
        {
            title: "Para crecer tu negocio",
            image: Photo1,
            link: "/article1",
            height:'32vh',
            heightXs:'32vh',
            hideXs:'block',
        },
        {
            title: "Para tu primer auto",
            image: Photo2,
            link: "/article2",
            height:'28vh',
            heightXs:'20vh',
            hideXs:'block',
        },
        {
            title: "Para Pymes",
            image: Photo3,
            link: "/article3",
            height:'32vh',
            heightXs:'32vh',
            hideXs:'none',
        },
        {
            title: "Para un ingreso extra luego del trabajo",
            image: Photo4,
            link: "/article4",
            height:'36vh',
            heightMd:'36vh',
            hideXs:'block',
        },
        {
            title: "Para el offroad",
            image: Photo5,
            link: "/article5",
            height:'32vh',
            heightXs:'44vh',
            hideXs:'block',
        },
        {
            title: "Para grandes transportistas",
            image: Photo6,
            link: "/article6",
            height:'32vh',
            heightXs:'32vh',
            hideXs:'none'
        },
      ];

  return (
    <Box spacing={2} sx={{
        bgcolor:'#00B3FF55',
        width:'100vw',
        py:4,
        px:0,
        m:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
        <Masonry columns={{ xs: 2, md: 2, lg:3 }} spacing={2} sx={{
            width:'90vw',
            m:'0 auto',
            px:1,

        }}>
        {articles.map((article, index) => (
          
            <Card key={index} sx={{
                m:'16px auto',
                bgcolor:'white',
                borderRadius:'15px',
                alignItems:'top',
                mx:1,
                display:{xs:article.hideXs,md:article.hideXs, lg:'block'},
            }}>
              <CardMedia
                component='img'
                src={`${article.image}`}
                title={article.title}
                sx={{
                    height:{xs:article.height,lg:article.heightMd},
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" sx={{
                    fontSize:'1.2rem',
                    fontWidht:600,
                    minheight:'55px',
                    height:'55px',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex',
                }}>
                  {article.title}
                </Typography>
              </CardContent>
            </Card>
        ))}
    </Masonry>
    </Box>
  );
};

export default WhyMazAutos;

