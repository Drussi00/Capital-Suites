import { Grid, Typography, useMediaQuery, Box } from "@mui/material";
import React from "react";
import imgage3 from "../utils/Images/Cuartos/3.jpg";
import imgage2 from "../utils/Images/Cuartos/2.jpg";
import Layout from "../components/Layout";

const Nosotros = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Layout>
      <Grid
        container
        pl={4}
        pr={4}
        pb={4}
        display={"flex"}
        justifyContent="center"
      >
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
        <Grid item sm={6}>
          <Box>
            {" "}
            <Typography
              sx={{
                width: "100%",
                fontFamily: "mont",
                fontStyle: "normal",
                color: "white",
                opacity: ".5",
                fontSize: isDesktop ? "3rem" : "2.8rem",
                textShadow: "2px 2px #ff0000",
                textAlign: "center",
              }}
              variant="h1"
              component="h1"
            >
              Nosotros
            </Typography>
          </Box>
          <Box p={isDesktop ? 4 : 0}>
            <Typography
              sx={{ color: "white", fontSize: "1.2rem" }}
              variant="text"
              component="text"
            >
              Kapital Suites es un hotel familiar, desde su concepción, hasta su
              puesta en marcha, ya que surge del sueño de una familia pereirana
              de emprender en este sector ofreciendo un servicio inmejorable y
              lleno de pequeños detalles, en donde el huésped se sienta como en
              casa. Es así como se inicia la búsqueda de un lugar ubicado
              estratégicamente y que contara con el área necesaria para
              convertirse en un alojamiento ideal, que fuera una excelente
              opción, tanto si los huéspedes venían de trabajo a la ciudad, como
              si venían a divertirse o en plan familiar. Ya para el año 2017 se
              logró la adquisición de una casona perteneciente a una gran
              familia tradicional de Pereira que contaba con el área y ubicación
              ideales para el proyecto.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box>
            {" "}
            <Typography
              sx={{
                width: "100%",
                fontFamily: "mont",
                fontStyle: "normal",
                color: "white",
                opacity: ".5",
                fontSize: isDesktop ? "3rem" : "2.8rem",
                textShadow: "2px 2px #ff0000",
                textAlign: "center",
              }}
              variant="h1"
              component="h1"
            >
              Nuestra Historia
            </Typography>
          </Box>
          <Box p={isDesktop ? 4 : 0}>
            <Typography
              sx={{ color: "white", fontSize: "1.2rem" }}
              variant="text"
              component="text"
            >
              Inmediatamente y bajo la dirección de dos reconocidos arquitectos
              de la ciudad, se iniciaron las obras de remodelación, optimizando
              materiales y aprovechando cada espacio de la mejor manera. Se
              eligió un estilo industrial, con un toque cálido, para que todo
              aquel que llegara tuviera la sensación de estar en un sitio
              acogedor. Gran parte de la madera que se ve expuesta en las
              escaleras y lobby del hotel, se recicló de la antigua casa, así
              como muchas de las paredes que se pueden ver en los pasillos,
              exhiben los ladrillos originales de la construcción. Para el mes
              de agosto del año 2019 se da apertura oficial a Kapital Suites
              Pereira con 11 habitaciones y desde ese momento hemos ido
              creciendo y superando retos, de la mano de un equipo de
              colaboradores valiosos y fundamentales en el logro de los
              objetivos propuestos.
            </Typography>{" "}
          </Box>
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
