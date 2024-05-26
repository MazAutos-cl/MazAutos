import React, { useContext, useState } from "react";
import { Grid, Container } from "@mui/material";
// import Grid from '@mui/material/Unstable_Grid2';
import PoolCard from "../poolcard/PoolCard";
import { MyContext } from "../../context/PoolsContext";
import { UserContext } from "../../context/UsersContext";

const PoolsCenter = () => {
  const { pools } = useContext(MyContext);
  let { role } = useContext(UserContext);
  // console.log(role)

  return (
    <Container
      maxWidth=""
      id="pools"
      xs={{ width: "100vw" }}
      md={{ width: "90vw" }}
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#eceff1",
      }}
    >
      <Grid
        container
        sx={{
          p: 1,
          m: 1,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {pools.map((p) => (
          <Grid item xs={12} md={5.7} lg={3.8} sx={{ mb: 2, mt: 2 }} key={p.id}>
            <PoolCard pool={p} edit={role === "admin" ? true : false} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PoolsCenter;
