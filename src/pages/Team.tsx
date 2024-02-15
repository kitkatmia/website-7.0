import React from "react";
import "../App.css";
import Bar from "../components/Bar";
import NavBar from "../components/NavBar";
import { Box } from "@mui/joy";
import Footer from "../components/Footer";
import Section from "../components/Section";

function Team() {
  return (
    <Box sx={{ minHeight: "100dvh" }}>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <Bar position="Directors"></Bar>
      </Section>
      <Section>
        <Bar position="Tech"></Bar>
      </Section>
      <Section>
        <Bar position="Event"></Bar>
      </Section>
      <Section>
        <Bar position="Outreach"></Bar>
      </Section>
      <Section>
        <Bar position="Sponsorship"></Bar>
      </Section>
      <Footer />
    </Box>
  );
}

export default Team;
