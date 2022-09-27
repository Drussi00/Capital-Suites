import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import cuartos1 from "../utils/Images/Cuartos/1.jpg";
import cuartos2 from "../utils/Images/Cuartos/2.jpg";
import cuartos3 from "../utils/Images/Cuartos/3.jpg";
import cuartos4 from "../utils/Images/Cuartos/4.jpg";

const Habitaciones = () => {
  const [cuarto, setcuarto] = useState({
    cuartos: cuartos1,
    blanco1: true,
    blanco2: false,
    blanco3: false,
    blanco4: false,
  });
  const { cuartos, blanco1, blanco2, blanco3, blanco4 } = cuarto;
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Container>
      <Box>
        <Grid container spacing={6} sx={{ justifyContent: "center" }}>
          <Grid md={4} item>
            <List>
              <ListItem>
                <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
                  Descubre nuestras habitaciones
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ color: "white", fontSize: "2rem" }}>
                  Acabados de lugo
                </Typography>
              </ListItem>
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
                      cuartos: cuartos1,
                      blanco1: true,
                      blanco2: false,
                      blanco3: false,
                      blanco4: false,
                    })
                  }
                >
                  <img src={cuartos1.src} height="100px" width="100px" />
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
                        Classic Suite
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de 200.000
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
                      cuartos: cuartos2,
                      blanco1: false,
                      blanco2: true,
                      blanco3: false,
                      blanco4: false,
                    })
                  }
                >
                  <img src={cuartos2.src} height="100px" width="100px" />
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
                        Double Suite
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
                  backgroundColor: blanco3 ? "white" : null,
                  color: blanco3 ? null : "white",
                }}
              >
                <Box
                  display="flex"
                  onMouseOver={() =>
                    setcuarto({
                      cuartos: cuartos3,
                      blanco1: false,
                      blanco2: false,
                      blanco3: true,
                      blanco4: false,
                    })
                  }
                >
                  <img src={cuartos3.src} height="100px" width="100px" />
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
                        Family Suite
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de 200.000
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
                      cuartos: cuartos4,
                      blanco1: false,
                      blanco2: false,
                      blanco3: false,
                      blanco4: true,
                    })
                  }
                >
                  <img src={cuartos4.src} height="100px" width="160px" />
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
                        Vip Suite
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="center" sx={{ fontSize: "0.9rem" }}>
                        Noches a partir de 200.000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid md={8} item>
            <img
              src={cuartos?.src}
              width={isDesktop ? "800px" : "100%"}
              height="553px"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Habitaciones;
