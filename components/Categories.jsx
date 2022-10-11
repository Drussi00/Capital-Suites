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
            sx={{ color: "white", fontweight: "bold", width: "100%" }}
          >
            <Typography variant="text" component="text" align={"center"}>
              hen an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Typography>
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
