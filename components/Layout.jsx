import { createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../utils/Images/logo.png";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import NextLink from "next/link";
import classes from "../utils/classes";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

////////////////////////////////////////////////////////////////
export default function Layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  const isDesktop = useMediaQuery("(min-width:600px)");
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };
  return (
    <>
      <Head>
        <title>{title ? `${title} - Kapital Suites` : "Kapital Suites"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <AppBar
            position="static"
            sx={{ ...classes.appbar }}
            className="appbar"
          >
            <Toolbar sx={{ ...classes.toolbar, backgroundColor: "black" }}>
              <Box display="flex" justifyContent="center">
                <IconButton
                  sx={{ display: isDesktop ? "none" : null }}
                  edge="start"
                  aria-label="open drawer"
                  onClick={sidebarOpenHandler}
                >
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={sidbarVisible}
                  onClose={sidebarCloseHandler}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    sx={{ maxWidth: "350px" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={logo.src}
                        style={{
                          display: "flex",

                          width: "150px",
                          height: "80px",
                        }}
                      />
                    </Box>{" "}
                    <Box display="flex">
                      <NextLink href="/" passHref>
                        <Link>
                          <Typography
                            variant="h1"
                            component="h1"
                            sx={classes.brand}
                          >
                            Nosotros
                          </Typography>
                        </Link>
                      </NextLink>
                    </Box>
                    <Box display="flex">
                      <NextLink href="/" passHref>
                        <Link>
                          <Typography
                            variant="h1"
                            component="h1"
                            sx={classes.brand}
                          >
                            Suites
                          </Typography>
                        </Link>
                      </NextLink>
                    </Box>
                    <Box display="flex">
                      <NextLink href="/" passHref>
                        <Link>
                          <Typography
                            variant="h1"
                            component="h1"
                            sx={classes.brand}
                          >
                            Reservar
                          </Typography>
                        </Link>
                      </NextLink>
                    </Box>
                    <Box display="flex">
                      <NextLink href="/" passHref>
                        <Link>
                          <Typography
                            variant="h1"
                            component="h1"
                            sx={classes.brand}
                          >
                            Resort
                          </Typography>
                        </Link>
                      </NextLink>
                    </Box>{" "}
                  </Box>
                </Drawer>
                <Box display={isDesktop ? "none" : null}>
                  <img
                    src={logo.src}
                    style={{
                      display: "flex",
                      marginLeft: isDesktop ? "0" : "80px",
                      width: "150px",
                      height: "80px",
                    }}
                  />
                </Box>
              </Box>
              <Box
                display={isDesktop ? "flex" : "none"}
                alignItems="center"
                justifyContent="space-around"
                sx={{ width: "100%" }}
              >
                <Box display="flex">
                  <NextLink href="/" passHref>
                    <Link>
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={classes.brand}
                      >
                        Nosotros
                      </Typography>
                    </Link>
                  </NextLink>
                </Box>
                <Box display="flex">
                  <NextLink href="/" passHref>
                    <Link>
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={classes.brand}
                      >
                        Suites
                      </Typography>
                    </Link>
                  </NextLink>
                </Box>
                <Box>
                  <img
                    src={logo.src}
                    style={{
                      display: "flex",

                      width: "150px",
                      height: "80px",
                    }}
                  />
                </Box>
                <Box display="flex">
                  <NextLink href="/" passHref>
                    <Link>
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={classes.brand}
                      >
                        Reservar
                      </Typography>
                    </Link>
                  </NextLink>
                </Box>
                <Box display="flex">
                  <NextLink href="/" passHref>
                    <Link>
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={classes.brand}
                      >
                        Resort
                      </Typography>
                    </Link>
                  </NextLink>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          <Container
            disableGutters={true}
            component="main"
            maxWidth="false"
            sx={classes.main}
          >
            {children}
          </Container>
          <Divider sx={{ color: "black", opacity: "1" }} />
          <Box
            display="flex"
            justifyContent={"space-between"}
            component="footer"
            sx={{
              paddingRight: isDesktop ? "50px" : "30px",
              marginLeft: isDesktop ? "50px" : "30px",

              marginTop: 5,
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            <Box>
              <Box>
                <Typography align="justify">All rights reserved. </Typography>
              </Box>
              <Box>
                <Typography align="justify"> Kapital Suites.</Typography>
              </Box>
            </Box>
            <Box>
              <Box display="flex" sx={{ justifyContent: "space-around" }}>
                <WhatsAppIcon fontSize="large" sx={{ marginLeft: "20px" }} />
                <InstagramIcon fontSize="large" sx={{ marginLeft: "20px" }} />
                <EmailIcon fontSize="large" sx={{ marginLeft: "20px" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
