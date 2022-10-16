import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import principal from "../utils/Images/principal.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NextLink from "next/link";
import Image from "next/image";
const Banner = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {" "}
      <Image
        width="2000px"
        height={isDesktop ? "1000px" : "3000px"}
        src={principal.src}
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
      <NextLink href="https://wa.me/message/NK5A4TBMMGBZA1" passHref>
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
              textDecoration: "underline ",
            },
          }}
        >
          Reserva Ahora
          <WhatsAppIcon
            fontSize="large"
            sx={{ marginLeft: "40px", color: "rgb(142, 206, 120)" }}
          />
        </Button>
      </NextLink>
    </div>
  );
};

export default Banner;
