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
import background from "../data/EarthGraphic.webp";

const Home = () => {
  return (
    <Box
      sx={{
      //currently only works well with black background
        background: 'linear-gradient(-135deg, rgba(74, 124, 160, 0.30), rgba(25, 101, 168, 0.17), rgba(60, 23, 138, 0.15), rgba(68, 115, 158, 0.05))',
    }}
    >
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "40vw auto",
          sm: "35vw auto",
          md: "35vw auto",
          lg: "30vw auto",
          xl: "30vw auto",
        },
      }}
    >
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
        <Schedule />
      </Section>
      <Section>
        <ImageCarousel
          image_urls={[
            "awards",
            "food",
            "hackers",
            "mrnguyen",
            "presentation",
          ].map((image) => `/images/${image}.jpg`)}
        ></ImageCarousel>
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
      </Box>
  );
};
export default Home;
