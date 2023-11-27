import React from 'react';
import Card from './Card';
import Positions from "../data/positions.json";
import {Box} from "@mui/joy";

interface Props {
  position: "Directors" | "Sponsorship" | "Tech" | "Event" | "Outreach",
}

function Bar(props: Props) {
  return (
      <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          width: "100%",
          gap: "1rem",
      }}>
          {Positions[props.position].map((person) => {
              return <Card key={person.name} name={person.name} image_url={person.image_url} position={props.position} link={person.link}></Card>
          })}
      </Box>
  );
}

export default Bar;
