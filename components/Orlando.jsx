import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import orlando from "../utils/Images/orlando.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import o1 from "../utils/Images/orlando/O1.jpg";
import o2 from "../utils/Images/orlando/O2.jpg";
import o3 from "../utils/Images/orlando/O3.jpeg";
import o4 from "../utils/Images/orlando/O4.jpeg";
import o5 from "../utils/Images/orlando/O5.jpeg";
import o6 from "../utils/Images/orlando/O6.jpeg";
const Orlando = () => {
  const [index, setIndex] = useState(0);
  const [arr, setarr] = useState([]);
  useEffect(() => {
    setarr(
      isDesktop ? [orlando, o1, o2, o3, o4, o5, o6] : [orlando, o1, o2, o3]
    );
  }, []);
  console.log(arr);
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <img
            src={arr[index]?.src}
            width="100%"
            height={isDesktop ? "400px" : "300px"}
          />
          <Box>
            <div className="small-images-container">
              {arr?.map((item, i) => (
                <img
                  key={item.key}
                  width={300}
                  height={300}
                  alt={item.name}
                  src={item?.src}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: isDesktop ? "60px" : 0 }}
          >
            <Typography variant="h1" component="h1" sx={{ mt: 0 }}>
              Welcome to Orlando
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginLeft: "22px", marginRight: "60px", mb: 2 }}
            className="lefty"
          >
            <Typography variant="text" component="text" sx={{ pl: 5 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1
            </Typography>{" "}
          </Box>

          <Box display="flex" sx={{ paddingTop: "20px" }}>
            <Grid
              container
              spacing={5}
              sx={{ ml: 0, fontSize: isDesktop ? "1.1rem" : ".8rem" }}
            >
              <Grid item md={6} sm={6}>
                <FiberManualRecordIcon fontSize="small" />7 Huespedes
              </Grid>
              <Grid item md={6} sm={6} sx={{ pr: "20px" }} className="banos">
                <FiberManualRecordIcon fontSize="small" /> 2 baños
              </Grid>
              <Grid item md={6} sm={6}>
                <FiberManualRecordIcon fontSize="small" /> 2 habitaciones
              </Grid>
              <Grid item md={6} sm={6}>
                <FiberManualRecordIcon fontSize="small" /> 5 camas
              </Grid>
              <Grid item md={12}>
                <FiberManualRecordIcon fontSize="small" /> A 15 minutos en carro
                de Disney World
              </Grid>
              <Grid item md={12}>
                <FiberManualRecordIcon fontSize="small" /> A 30 minutos en carro
                de Universal Studios
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ paddingTop: "20px" }}
          >
            {" "}
            <Button
              sx={{
                fontFamily: "mont",
                fontStyle: "normal",

                color: "white",
                fontSize: "1.5rem",
                borderRadius: "0",
                backgroundColor: "#B18C6B",
                width: "90%",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#B18C6B",
                  transform: "scale(1.1, 1.1)",
                },
              }}
            >
              Reserva Ahora
              <WhatsAppIcon
                fontSize="large"
                sx={{ marginLeft: "40px", color: "rgb(142, 206, 120)" }}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>{" "}
    </Container>
  );
};

export default Orlando;
