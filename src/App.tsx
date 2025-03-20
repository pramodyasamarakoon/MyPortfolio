import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        {/* Home Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Home />
        </Box>

        {/* Skills Section */}
        <Box
          id="skills"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skills />
        </Box>

        {/* Projects Section */}
        <Box
          id="projects"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Projects Section</Typography>
        </Box>

        {/* About Section */}
        <Box
          id="about"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">About Me Section</Typography>
        </Box>
      </Container>
    </>
  );
};

export default App;
