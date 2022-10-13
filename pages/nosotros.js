import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import imgage3 from "../utils/Images/Cuartos/3.jpg";
import imgage2 from "../utils/Images/Cuartos/2.jpg";
import Layout from "../components/Layout";
const Nosotros = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Layout>
      <Grid container pl={4} pr={4}>
        <Grid item md={12} display={"flex"} pb={1} justifyContent="center">
          <Typography
            sx={{
              fontFamily: "mont",
              fontStyle: "normal",

              color: "white",
              fontSize: isDesktop ? "5.5rem" : "2.8rem",
              opacity: ".5",
              textShadow: "2px 2px #ff0000",
            }}
            variant="h1"
            component="h1"
          >
            Kapital Suites
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <img
            src={imgage3.src}
            height={isDesktop ? "500px" : "300px"}
            width={"100%"}
          />
        </Grid>
        <Grid item sm={6} display={"flex"} justifyContent="center">
          <Typography
            sx={{
              fontFamily: "mont",
              fontStyle: "normal",
              color: "white",
              opacity: ".5",
              fontSize: isDesktop ? "3rem" : "2.8rem",
              textShadow: "2px 2px #ff0000",
            }}
            variant="h1"
            component="h1"
          >
            Nuestra Historia
          </Typography>
        </Grid>
        <Grid item sm={6} display={"flex"} justifyContent="center">
          <Typography
            sx={{
              fontFamily: "mont",
              fontStyle: "normal",
              color: "white",
              opacity: ".5",
              fontSize: isDesktop ? "3rem" : "2.8rem",
              textShadow: "2px 2px #ff0000",
            }}
            variant="h1"
            component="h1"
          >
            Sobre Nosotros
          </Typography>
        </Grid>
        <Grid item sm={6} justifyContent="end" display="flex">
          {" "}
          <img
            src={imgage2.src}
            height={isDesktop ? "500px" : "300px"}
            width={"100%"}
          />
        </Grid>
      </Grid>{" "}
    </Layout>
  );
};

export default Nosotros;
