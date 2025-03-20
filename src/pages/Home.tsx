// src/pages/Home.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        position: "relative",
      }}
    >
      {/* Background Image with Low Opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("/assets/developer_back.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      {/* Left Column */}
      <Box
        sx={{
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "80px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#121212",
            fontSize: "18px",
          }}
        >
          Hey, I'm Pramodya Samarakoon
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: "5px",
            color: theme.palette.secondary.main,
            fontSize: "60px",
            fontWeight: "800px",
            lineHeight: 0.9,
          }}
        >
          <span
            style={{ fontWeight: "bold", color: theme.palette.secondary.main }}
          >
            Full
          </span>
          <span style={{ color: "#1C1C1C", fontWeight: "bold" }}>
            Stack Developer
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            color: theme.palette.text.secondary,
            maxWidth: "400px",
          }}
        >
          A Software Engineer with 2+ years of experience in full-stack
          development. Skilled in React.js, .NET Core, Spring Boot, and Flutter,
          I specialize in creating scalable apps and responsive interfaces.
          Passionate about delivering high-quality, efficient software solutions
          while ensuring innovation and security.
        </Typography>

        <Box sx={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              marginRight: "10px",
              backgroundColor: "#1C1C1C",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: "#1C1C1C",
              },
            }}
          >
            Get in Touch
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#1C1C1C",
              color: "#1C1C1C",
              "&:hover": {
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Projects
          </Button>
        </Box>
      </Box>

      {/* Right Column: My Image */}
      <Box
        sx={{
          maxWidth: "50%",
          marginRight: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "50%",
        }}
      >
        <img
          src="/assets/Profile_Image.jpg"
          alt="Pramodya Samarakoon"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
