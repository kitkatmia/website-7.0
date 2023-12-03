import React from 'react';
import Card from './Card';
import Positions from "../data/positions.json";
import {Box, CardContent} from "@mui/joy";
import {Card as MuiCard} from "@mui/joy";
import Typography from "@mui/joy/Typography";

interface Props {
  position: "Directors" | "Sponsorship" | "Tech" | "Event" | "Outreach",
}

function Bar(props: Props) {
  return (
      <MuiCard variant={"plain"} sx={{border:"1px solid #c92978"}}>

          <Box sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              width: "100%",
              gap: "1rem",

          }}>
              <MuiCard variant={"solid"} color={"primary"}>
                  <CardContent>
                      <Typography level="h1">{props.position}</Typography>
                  </CardContent>
              </MuiCard>
              {Positions[props.position].map((person) => {
                  return <Card key={person.name} name={person.name} image_url={person.image_url} position={props.position} link={person.link}></Card>
              })}
          </Box>
      </MuiCard>

  );
}

export default Bar;
