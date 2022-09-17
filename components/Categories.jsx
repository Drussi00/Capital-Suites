import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import nuddy from "/utils/Images/nuddy.png";
import React from "react";
import classes from "../utils/classes";

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
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item className="nuddyBear">
              <img
                src={nuddy.src}
                style={{
                  display: "flex",

                  width: isDesktop ? "410px" : "100%",
                  height: "520px",
                }}
              />
            </Grid>
            <Grid item md={7}>
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <img
                    src="https://i.etsystatic.com/30139968/c/1981/1581/0/102/il/8d9b27/3121799274/il_340x270.3121799274_8kd9.jpg"
                    style={{
                      width: isDesktop ? "320px" : "334px",
                      height: "250px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src="https://i.etsystatic.com/30139968/c/1981/1581/0/102/il/8d9b27/3121799274/il_340x270.3121799274_8kd9.jpg"
                    style={{
                      width: isDesktop ? "320px" : "340px",
                      height: "250px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src="https://i.etsystatic.com/30139968/c/1981/1581/0/102/il/8d9b27/3121799274/il_340x270.3121799274_8kd9.jpg"
                    style={{
                      width: isDesktop ? "320px" : "340px",
                      height: "250px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src="https://i.etsystatic.com/30139968/c/1981/1581/0/102/il/8d9b27/3121799274/il_340x270.3121799274_8kd9.jpg"
                    style={{
                      width: isDesktop ? "320px" : "340px",
                      height: "250px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop={5}>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "0",
              textDecoration: "none",
              width: "20%",
            }}
          >
            Conoce mas{" "}
          </Button>
        </Box>
      </Container>
    </div>
  );
}
