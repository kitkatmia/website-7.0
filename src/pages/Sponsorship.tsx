import "../App.css";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Box from "@mui/joy/Box";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Sponsorship = () => {
  return (
    <Box>
      <NavBar />
      <Section>
        <h1 style={{ color: 'white' }}>Sponsor <span style={{ color: '#C92978' }}>MVHacks 7.0</span>!</h1>
        <p>
          MVHacks is now in its 7th year of inspiring high school students throughout the country to get together and build great projects. As a prestigious, in-person hackathon, our past events have consistently attracted over 200 unique and diverse attendees. With your support, we aim to engage over 250+ students for MVHacks.
        </p>
        <p>
          To discover more about sponsorship opportunities, please download our Sponsorship Prospectus below and reach out to us at <a href="mailto:hello@mvhacks.io">hello@mvhacks.io</a>.
        </p>
        <p>
          Join us, and let's make MVHacks 7.0 an unforgettable experience. We eagerly await the participation of your company!
        </p>
        <a href="/MVHacks Sponsorship Prospectus.pdf" download="MVHacks Sponsorship Prospectus.pdf" className="prospectus-download-link">Download the Sponsorship Prospectus</a>
      </Section>
      {/* Existing content */}
      <Section>
        <h1>Prospectus</h1>
        <div>
          <img src={"/images/Prospectus.png"} width={1150} alt="MVHacks prospectus for sponsorships. Download the full version below" />
        </div>
      </Section>
      <Section>
        <h1>
          MVHacks 7.0 would not be possible without the generosity of our sponsors.
        </h1>
        <Sponsors />
      </Section>
      <Footer />
    </Box>
  );
};

export default Sponsorship;
