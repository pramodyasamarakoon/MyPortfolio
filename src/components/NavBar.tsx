import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const [activeSection, setActiveSection] = useState<string>("home");

  // Handle CV download logic
  const handleCVDownload = () => {
    const cvUrl = "src/assets/SM_Pramodya_Samarakoon.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "SM_Pramodya_Samarakoon.pdf";
    link.click();
  };

  // Function to track the active section on scroll
  const handleScroll = () => {
    const sections = ["home", "projects", "about"];
    const scrollPosition = window.scrollY;

    // Check which section is in view
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { top, bottom } = sectionElement.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setActiveSection(section);
        }
      }
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Apply blur effect
        boxShadow: 0,
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Leftmost Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1C1C1C",
            fontSize: "20px",
          }}
        >
          PramodyaS.
        </Typography>

        {/* Middle: Centered Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {["home", "projects", "about"].map((route, index) => {
            return (
              <Button
                key={index}
                href={`#${route}`} // Use href to scroll to the respective section
                sx={{
                  color: activeSection === route ? primaryColor : "#494949",
                  "&:hover": {
                    color: "8a4af3",
                  },
                  textTransform: "none",
                  fontSize: "16px",
                  marginLeft: "16px",
                }}
              >
                {route === "home"
                  ? "Home"
                  : route === "projects"
                  ? "Projects"
                  : "About"}
              </Button>
            );
          })}
        </Box>

        {/* Rightmost CV Download Button */}
        <Tooltip title="Download CV">
          <IconButton
            color="primary"
            onClick={handleCVDownload}
            sx={{
              color: primaryColor,
              fontSize: "18px", // Set icon size to 18px
              "&:hover": {
                color: secondaryColor,
              },
            }}
          >
            <CloudDownloadIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
