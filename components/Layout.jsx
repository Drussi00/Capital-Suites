import { createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../utils/Images/logo.png";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Head from "next/head";
import NextLink from "next/link";
import classes from "../utils/classes";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

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

  return (
    <>
      <Head>
        <title>{title ? `${title} - Nuddy minds` : "Nuddy minds"}</title>
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
              <Box
                display="flex"
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
                        Home
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
                <Box display="flex">
                  <NextLink href="/" passHref>
                    <Link>
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={classes.brand}
                      >
                        Contacto
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
                <Typography align="justify"> Nuddy minds.</Typography>
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
