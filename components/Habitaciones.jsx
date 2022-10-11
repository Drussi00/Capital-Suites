import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { urlFor } from "../utils/image";

const Habitaciones = ({ cuartosH }) => {
  useEffect(() => {
    console.log(cuartosH[0].slug);
  }, []);

  const [cuarto, setcuarto] = useState({
    slug: cuartosH[0].slug.current,
    cuartos: urlFor(cuartosH[0]?.image && cuartosH[0]?.image[0]),
    blanco1: true,
    blanco2: false,
    blanco3: false,
    blanco4: false,
    blanco5: false,
  });
  const { cuartos, blanco1, blanco2, blanco3, blanco4, blanco5, slug } = cuarto;
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Container>
      <Box>
        <Grid container spacing={6} sx={{ justifyContent: "center" }}>
          <Grid md={4} item>
            <List>
              <ListItem
                sx={{
                  backgroundColor: blanco1 ? "white" : null,
                  color: blanco1 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      slug: cuartosH[0].slug.current,
                      cuartos: urlFor(
                        cuartosH[0]?.image && cuartosH[0]?.image[0]
                      ),
                      blanco1: true,
                      blanco2: false,
                      blanco3: false,
                      blanco4: false,
                      blanco5: false,
                    })
                  }
                >
                  <img
                    src={urlFor(cuartosH[0]?.image && cuartosH[0]?.image[0])}
                    height="100px"
                    width="50%"
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Box>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        {cuartosH[0].name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de {cuartosH[0].price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: blanco2 ? "white" : null,
                  color: blanco2 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      slug: cuartosH[1]?.slug?.current,
                      cuartos: urlFor(
                        cuartosH[1]?.image && cuartosH[1]?.image[0]
                      ),
                      blanco1: false,
                      blanco2: true,
                      blanco3: false,
                      blanco4: false,
                      blanco5: false,
                    })
                  }
                >
                  <img
                    src={urlFor(cuartosH[1]?.image && cuartosH[1]?.image[0])}
                    height="100px"
                    width="65%"
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Box>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        {cuartosH[1].name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de {cuartosH[0].price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: blanco3 ? "white" : null,
                  color: blanco3 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      slug: cuartosH[2]?.slug?.current,
                      cuartos: urlFor(
                        cuartosH[2]?.image && cuartosH[2]?.image[0]
                      ),
                      blanco1: false,
                      blanco2: false,
                      blanco3: true,
                      blanco4: false,
                      blanco5: false,
                    })
                  }
                >
                  <img
                    src={urlFor(cuartosH[2]?.image && cuartosH[2]?.image[0])}
                    height="100px"
                    width="100px"
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Box>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        {cuartosH[2].name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de 300.000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: blanco4 ? "white" : null,
                  color: blanco4 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      slug: cuartosH[3]?.slug?.current,
                      cuartos: urlFor(
                        cuartosH[3]?.image && cuartosH[3]?.image[0]
                      ),
                      blanco1: false,
                      blanco2: false,
                      blanco3: false,
                      blanco4: true,
                      blanco5: false,
                    })
                  }
                >
                  <img
                    src={urlFor(cuartosH[3]?.image && cuartosH[3]?.image[0])}
                    height="100px"
                    width="100px"
                    style={{ objectFit: "contain" }}
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Box>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        {cuartosH[3].name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de {cuartosH[0].price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: blanco5 ? "white" : null,
                  color: blanco5 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      slug: cuartosH[4]?.slug?.current,
                      cuartos: urlFor(
                        cuartosH[4]?.image && cuartosH[4]?.image[0]
                      ),
                      blanco1: false,
                      blanco2: false,
                      blanco3: false,
                      blanco4: false,
                      blanco5: true,
                    })
                  }
                >
                  <img
                    src={urlFor(cuartosH[4]?.image && cuartosH[4]?.image[0])}
                    height="100px"
                    width="70%"
                  />
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Box>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        {cuartosH[4].name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de {cuartosH[0].price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid md={8} item position="relative">
            <NextLink
              position="absolute"
              href={`/habitaciones/${slug}`}
              passHref
            >
              <Link position="absolute" className="butLink">
                <Button
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0",
                    width: isDesktop ? "100%" : "80%",

                    textTransform: "none",
                    fontWeight: "bold",
                    zIndex: 1,
                  }}
                >
                  Conoce mas
                </Button>{" "}
              </Link>
            </NextLink>
            <img
              style={{ position: "relative" }}
              src={cuartos}
              width={isDesktop ? "800px" : "100%"}
              height="600px"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Habitaciones;
