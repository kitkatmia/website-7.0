import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Box from "@mui/joy/Box";
import StatsCards from "../components/StatsCards";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Sponsors from "../components/Sponsors";
import Schedule from "../components/Schedule";

const Home = () => {
  return (
    <Box>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <Hero></Hero>
      </Section>
      <Section>
        <StatsCards></StatsCards>
      </Section>
      <Section>
        <Schedule/>
      </Section>
      <Section>
          <ImageCarousel image_urls={["awards", "food", "hackers", "mrnguyen", "presentation"].map(image => `/images/${image}.jpg`)}></ImageCarousel>
      </Section>
      <Section>
          <Sponsors></Sponsors>
      </Section>
      {/* <Box sx={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Box sx={{p: "1rem", pl: "calc(calc(calc(100vw - min(100vw, 1200px)) / 2) + 1rem)"}}>
            <Stats></Stats>
          </Box>
          <Box sx={{p: "1rem", pr: "calc(calc(calc(100vw - min(100vw, 1200px)) / 2) + 1rem)"}}>
            <MoreStats></MoreStats>
          </Box> */}

      {/* </Box> */}
      <Footer></Footer>
    </Box>
  );
};
export default Home;
