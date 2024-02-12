import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Box from "@mui/joy/Box";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Sponsorship = () => {
  return (
    <Box>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <h1>
          MVHacks would not be possible without the generosity of our sponsors
        </h1>
        <Sponsors />
      </Section>
      <Section>
        <h1>Sponsor us!</h1>
        <div>
          <img src={"/images/Prospectus.png"} width={1150} alt="MVHacks prospectus for sponsorships. Download the full version below" />
        </div>
        <a href="/MVHacks Sponsorship Prospectus.pdf" download="MVHacks Sponsorship Prospectus.pdf">Download the Prospectus</a>

      </Section>
      <Footer></Footer>
    </Box>
  );
};
export default Sponsorship;
