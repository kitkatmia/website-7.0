import Box from "@mui/joy/Box";
import Section from "../components/Section";
import NavBar from "../components/NavBar";
import React, { useEffect } from 'react';
import Footer from "../components/Footer";

const Apply = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);
    
  return (
    <Box sx={{
      textAlign: "center", alignItems: "center", justifyContent: "center",padding:0
        }}>
            <Section>
                <NavBar />
            </Section>
            <Section>
            <Box
            className="outsideFrame"
      sx={{
        height: '100vh',
        overflow: 'hidden',
              position: 'relative',
              maxWidth: "100vw",
              width:"100%"
      }}
    >
          <Box
            className="frame"
        component="iframe"
        src="https://tally.so/r/wooeo1?transparentBackground=1"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0
        }}
        title="MVHacks Team Contributor Application"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      />
    </Box>

            </Section>

            <Footer></Footer>
        </Box>

    )
}

export default Apply;