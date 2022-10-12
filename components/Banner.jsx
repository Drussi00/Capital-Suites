import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import principal from "../utils/Images/principal.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Banner = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {" "}
      <img
        src={principal.src}
        style={{
          width: "100%",
          height: isDesktop ? "50vw" : "500px",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          fontFamily: "mont",
          fontStyle: "normal",
          left: isDesktop ? "50%" : "30%",
          transform: isDesktop
            ? " translate(-50%, -50%)"
            : " translate(-15%, -50%)",

          top: "35%",
          color: "white",
          fontSize: isDesktop ? "5.5rem" : "2.8rem",
          opacity: ".5",
          textShadow: "2px 2px #ff0000",
        }}
        variant="h1"
        component="h1"
      >
        Kapital Suites
      </Typography>
      <Button
        sx={{
          position: "absolute",
          fontFamily: "mont",
          fontStyle: "normal",
          left: "50%",
          transform: " translate(-50%, -50%)",
          top: "75%",
          color: "white",
          fontSize: isDesktop ? "1.5rem" : "1.1rem",
          borderRadius: "0",
          backgroundColor: "#B18C6B",
          width: isDesktop ? "30%" : "70%",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#B18C6B",
            transform: "translate(-50%, -45%)",
          },
        }}
      >
        Reserva Ahora
        <WhatsAppIcon
          fontSize="large"
          sx={{ marginLeft: "40px", color: "rgb(142, 206, 120)" }}
        />
      </Button>
    </div>
  );
};

export default Banner;
