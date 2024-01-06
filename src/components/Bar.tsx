import React from "react";
import Card from "./Card";
import { Box, CardContent } from "@mui/joy";
import { Card as MuiCard } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import useTeamData from "./teamData";

interface Props {
  position: "Directors" | "Sponsorship" | "Tech" | "Event" | "Outreach";
}

// bar = outline box for each position w/ internal stuff

function Bar(props: Props) {
  const { values } = useTeamData();

  return (
    <MuiCard variant={"plain"} sx={{ border: "1px solid #c92978" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          width: "100%",
          gap: "1rem",
        }}
      >
        <MuiCard variant={"solid"} color={"primary"}>
          <CardContent>
            <Typography level={props.position === "Sponsorship" ? "h2" : "h1"}>
              {props.position}
            </Typography>
          </CardContent>
        </MuiCard>
        {values &&
          Object.keys(values).map((name) => {
            if (values[name]["Team"].includes(props.position.slice(0, -1))) {
              const imageUrl =
                values[name]["Image"] !== ""
                  ? "/images/" + name + ".jpeg"
                  : "/images/default.webp";
              console.log("Generated Image URL:", imageUrl);
              return (
                <Card
                  key={name}
                  name={name}
                  image_url={imageUrl}
                  position={values[name]["Team"]}
                  link={values[name]["Link(s)"]}
                ></Card>
              );
            } else {
              return null;
            }
          })}
      </Box>
    </MuiCard>
  );
}

export default Bar;
