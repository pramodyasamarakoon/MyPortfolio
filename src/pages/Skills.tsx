import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const Skills = () => {
  const theme = useTheme();

  //   Skill Data set
  const skillsData = [
    { name: "React JS / React Native", image: "/assets/skills/react.png" },
    { name: ".Net Core", image: "/assets/skills/dotnet.png" },
    { name: "Node.js", image: "/assets/skills/node.png" },
    { name: "Flutter", image: "/assets/skills/flutter.png" },
    { name: "Java", image: "/assets/skills/java.png" },
    { name: "JavaScript", image: "/assets/skills/javascript.png" },
    { name: "MongoDB", image: "/assets/skills/mongodb.png" },
    { name: "MySQL", image: "/assets/skills/mysql.png" },
    { name: "TypeScript", image: "/assets/skills/typescript.png" },
    { name: "HTML", image: "/assets/skills/html.png" },
    { name: "CSS", image: "/assets/skills/css.png" },
    { name: "Tailwind CSS", image: "/assets/skills/tailwind.png" },
    { name: "Material UI", image: "/assets/skills/mui.png" },
    { name: "Git", image: "/assets/skills/git.png" },
    { name: "Postman", image: "/assets/skills/postman.png" },
    { name: "Figma", image: "/assets/skills/figma.png" },
  ];

  return (
    <Box
      id="skills"
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
          backgroundImage: `url("/assets/skills_back.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        }}
      />
      {/* Topic */}
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: "80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#121212",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Skills
          <span style={{ color: "#8a4af3" }}>.</span>
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Box
        sx={{
          position: "absolute",
          top: "180px",
          left: "80px",
          right: "80px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {skillsData.map((skill, index) => (
            <Grid item xs={4} sm={2} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginBottom: "10px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#121212",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
