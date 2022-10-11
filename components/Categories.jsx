import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import first from "/utils/Images/1.jpg";
import second from "/utils/Images/2.jpg";
import third from "/utils/Images/3.jpg";
import fourth from "/utils/Images/4.jpg";

import React from "react";

export default function Categories() {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Container justify="center" alignItems="center">
        <Box>
          <Box display="flex" justifyContent="center">
            <Typography sx={{ color: "white", fontweight: "bold" }}>
              Bienvenido a{" "}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: "white", fontweight: "bold" }}
            >
              Kapital Suites Pereira
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            paddingBottom={6}
            sx={{ color: "white", fontweight: "bold", width: "100%", p: 5 }}
          >
            {isDesktop ? (
              <Typography variant="text" component="text" align={"left"}>
                Bienvenidos a Kapital Suites Pereira Estamos ubicados en una
                zona estratégica de la ciudad, a un lado del centro comercial
                Pereira Plaza, iniciando la avenida Circunvalar, en donde la
                vida nocturna es protagonista y caminar en el día es todo un
                placer. Aquí estará cerca de restaurantes, centros comerciales,
                bancos, iglesias, gimnasios, supermercados, entre muchos lugares
                más. Cada una de nuestras habitaciones cuenta con una cocina
                totalmente equipada, barra o mesa para comer, escritorio, aire
                acondicionado, internet WIFI y demás comodidades. Contamos con
                16 habitaciones y diferentes acomodaciones que van desde la
                Estándar individual, hasta un completo apartamento de dos
                habitaciones y con capacidad de alojar hasta a 8 personas. Cada
                una de ellas tiene un diseño y distribución particular, pero
                todas pensadas para ofrecerle ambientes agradables que lo hagan
                sentir como en casa.
              </Typography>
            ) : (
              <Typography variant="text" component="text" align={"left"}>
                Bienvenidos a Kapital Suites Pereira Estamos ubicados en una
                zona estratégica de la ciudad, a un lado del centro comercial
                Pereira Plaza, iniciando la avenida Circunvalar. Aquí estará
                cerca de restaurantes, centros comerciales, bancos, iglesias,
                gimnasios y supermercados. Cada una de nuestras habitaciones
                cuenta con una cocina totalmente equipada, barra o mesa para
                comer, escritorio, aire acondicionado, internet WIFI y demás
                comodidades. Contamos con 16 habitaciones y diferentes
                acomodaciones que van desde la Estándar individual, hasta un
                apartamento con capacidad de hasta 8 personas.
              </Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item>
              <div>
                <div>
                  <div>
                    <iframe
                      width={isDesktop ? "410Px" : "390px"}
                      height={isDesktop ? "520px" : "400px"}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=4.808833260534765,%20-75.6910292014792&t=&z=19&ie=UTF8&iwloc=&output=embed"
                      scrolling="no"
                    ></iframe>
                    <a href="https://123movies-to.org"></a>
                    <a href="https://www.embedgooglemap.net"></a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item sm={6} xs={6}>
                  <img
                    src={first.src}
                    style={{
                      width: isDesktop ? "320px" : "100%",
                      height: isDesktop ? "250px" : "200px",
                    }}
                  />
                </Grid>
                <Grid item sm={6} xs={6}>
                  <img
                    src={second.src}
                    style={{
                      width: isDesktop ? "320px" : "100%",
                      height: isDesktop ? "250px" : "200px",
                    }}
                  />
                </Grid>
                <Grid item sm={6} xs={6}>
                  <img
                    src={third.src}
                    style={{
                      width: isDesktop ? "320px" : "100%",
                      height: isDesktop ? "250px" : "200px",
                    }}
                  />
                </Grid>
                <Grid item sm={6} xs={6}>
                  <img
                    src={fourth.src}
                    style={{
                      width: isDesktop ? "320px" : "100%",
                      height: isDesktop ? "250px" : "200px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
