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
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import { urlFor } from "../utils/image";
import { Dropdown } from "react-bootstrap";

const Habitaciones = ({ cuartosH }) => {
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
      {isDesktop ? (
        <Box
          display="flex"
          justifyContent="center"
          sx={{ color: "white", fontweight: "bold" }}
        >
          {" "}
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: isDesktop ? "4rem" : "2rem" }}
          >
            {" "}
            Nuestras Habitaciones{" "}
          </Typography>
        </Box>
      ) : null}

      {isDesktop ? (
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
                          Noches a partir de $
                          {new Intl.NumberFormat().format(
                            parseInt(cuartosH[0].preciosLogin)
                          )}
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
                          Noches a partir de $
                          {new Intl.NumberFormat().format(
                            parseInt(cuartosH[1].preciosLogin)
                          )}
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
                          Noches a partir de $
                          {new Intl.NumberFormat().format(
                            parseInt(cuartosH[2].preciosLogin)
                          )}
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
                          Noches a partir de $
                          {new Intl.NumberFormat().format(
                            parseInt(cuartosH[3].preciosLogin)
                          )}
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
                          Noches a partir de $
                          {new Intl.NumberFormat().format(
                            parseInt(cuartosH[4].preciosLogin)
                          )}
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
                      width: isDesktop ? "200px" : "80%",
                      textTransform: "none",
                      fontWeight: "bold",
                      zIndex: 1,
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    Conoce mas
                  </Button>{" "}
                </Link>
              </NextLink>
              <img
                style={{ position: "relative" }}
                src={cuartos}
                width={"100%"}
                height="600px"
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box display="flex" justifyContent="center" sx={{ mb: 10 }}>
            <Dropdown
              style={{
                zIndex: "100%",
                color: "white",
                "&:hover": { border: "none", color: "white" },
              }}
            >
              <Dropdown.Toggle
                sx={{ fontWeight: "bold", color: "white" }}
                variant=""
                id="dropdown-basic"
              >
                Nuestras Habitaciones
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  backgroundColor: "#ccae93",
                  width: "100%",
                  border: "none",
                  color: "white",
                }}
              >
                {cuartosH?.map((category, i) => (
                  <ListItem
                    key={i}
                    button
                    onClick={() => {
                      setcuarto({
                        ...cuarto,
                        cuartos: urlFor(
                          cuartosH[i]?.image && cuartosH[i]?.image[i]
                        ),
                      });
                      console.log("entro");
                    }}
                    sx={{
                      fontWeight: "normal",
                      "&:hover": { color: "black" },
                    }}
                  >
                    <ListItemText primary={category.name}></ListItemText>
                  </ListItem>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Box>
          <Box position="relative" sx={{ mb: 10 }}>
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
                    width: isDesktop ? "200px" : "100%",
                    textTransform: "none",
                    fontWeight: "bold",
                    zIndex: 1,
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  Conoce mas
                </Button>{" "}
              </Link>
            </NextLink>
            <img
              style={{ position: "relative" }}
              src={cuartos}
              width={"100%"}
              height="350px"
            />
          </Box>{" "}
        </Box>
      )}
    </Container>
  );
};

export default Habitaciones;
