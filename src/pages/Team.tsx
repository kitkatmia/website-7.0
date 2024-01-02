import React from "react";
import "../App.css";
import Bar from "../components/Bar";
import NavBar from "../components/NavBar";
import { Box } from "@mui/joy";
import Section from "../components/Section";

function Team() {
  return (
    <Box sx={{ minHeight: "100dvh" }}>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <Bar position="Tech"></Bar>
      </Section>
    </Box>
  );
}

export default Team;
