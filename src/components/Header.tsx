import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import styled from "styled-components";
import circle from "../data/circle.gif";

const Container = styled(Box)`
  position: relative;
`;

export default function Header() {
  const randomQueryParam = Math.floor(Math.random() * 10000);
  return (
    <Container>
      <Typography
        level="h1"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        The Hackathon for{" "}
        <Box
          position="relative"
          display="inline-block"
          style={{
            justifyContent: "center",
            width: "fit-content",
            alignItems: "center",
          }}
        >
          <img
            src={`${circle}?refresh=${randomQueryParam}`}
            alt="loading..."
            style={{ position: "absolute", width: "100%", height: "110%" }}
          />

          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            style={{ position: "relative", margin: "3vw", textAlign: "center" }}
          >
            everyone
          </Typography>
        </Box>
      </Typography>
    </Container>
  );
}
