import { createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Dropdown from "react-bootstrap/Dropdown";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../utils/Images/logo.png";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Head from "next/head";
import NextLink from "next/link";
import classes from "../utils/classes";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getError } from "../utils/error";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

////////////////////////////////////////////////////////////////
export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

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

  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e) => {
    setAnchorEl(null);
    router.push(e);
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    jsCookie.remove("userInfo");
    jsCookie.remove("cartItems");
    jsCookie.remove("shippingAddress");
    jsCookie.remove("paymentMethod");
    router.push("/");
  };

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  const [coleciones, setcoleciones] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: "error" });
      }
    };
    fetchCategories();
    const fetchColeciones = async () => {
      try {
        const { data } = await axios.get(`/api/products/coleciones`);
        setcoleciones(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: "error" });
      }
    };
    fetchColeciones();
  }, [enqueueSnackbar]);

  const isDesktop = useMediaQuery("(min-width:600px)");

  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}&category=Shop%20All`);
  };

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
                <Box>
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
                <Box>
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
                <Box>
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
                  <NextLink href="/" passHref>
                    <Link>
                      <img
                        src={logo.src}
                        style={{
                          display: "flex",

                          width: "150px",
                          height: "80px",
                        }}
                      />
                    </Link>
                  </NextLink>
                </Box>
                <Box>
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
                <Box>
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
                <Box>
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
