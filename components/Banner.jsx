import { Button, Typography } from "@mui/material";
import React from "react";
import principal from "../utils/Images/principal.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Banner = () => {
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
          maxHeight: "50vw",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          fontFamily: "mont",
          fontStyle: "normal",
          left: "50%",
          transform: " translate(-50%, -50%)",

          top: "35%",
          color: "white",
          fontSize: "5.5rem",
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
          fontSize: "1.5rem",
          borderRadius: "0",
          backgroundColor: "#B18C6B",
          width: "350px",
          textTransform: "none",
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
