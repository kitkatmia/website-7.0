import React from "react";
import Card from "./Card";
import Papa, { ParseResult } from "papaparse";
import { useState, useEffect } from "react";
import Positions from "../data/positions.json";
import { Box, CardContent } from "@mui/joy";
import { Card as MuiCard } from "@mui/joy";
import Typography from "@mui/joy/Typography";

interface Props {
  position: "Directors" | "Sponsorship" | "Tech" | "Event" | "Outreach";
}

function Bar(props: Props) {
  type Data = {
    Timestamp: string;
    Name: string;
    Team: string;
    "Link(s)": string;
    Image: string;
  };

  type Values = {
    data: Data[];
  };
  const [values, setValues] = useState<Values | undefined>();

  const getCSV = () => {
    Papa.parse("/team_data.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setValues(results);
      },
    });
  };

  React.useEffect(() => {
    getCSV();
  }, []);

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
            <Typography level="h1">{props.position}</Typography>
          </CardContent>
        </MuiCard>
        {values &&
          values.data.map((person) => {
            if (person["Team"].includes(props.position.slice(0,-1))) {
              return (
                <Card
                  key={person["Name"]}
                  name={person["Name"]}
                  image_url={"/images/" + person["Name"] + ".jpeg"}
                  position={person["Team"]}
                  link={person["Link(s)"]}
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
