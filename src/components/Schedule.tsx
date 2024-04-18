import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";

function createData(date: string, event: string) {
  return { date, event };
}

const rows = [
  createData("8:00AM", "Opening Ceremony"),
  createData("8:30AM", "Start Hacking"),
  createData("9:00AM", "Capture the flag start"),
  createData("10:30AM", "Workshop 1 (Tentative)"),
  createData("11:30AM", "Lunch (provided by MVHacks)"),
  createData("1:00PM", "Crowdstrike Workshop"),
  createData("2:00PM", "Guess the Image Game"),
  createData("3:00PM", "Workshop 3 (Tentative)"),
  createData("4:30PM", "Geoguessr Multiplayer live"),
  createData("5:30PM", "Cup stacking"),
  createData("7:00PM", "Submissions"),
  createData("7:15PM", "Voting and Judging"),
  createData("8:00PM", "Closing Ceremony"),
];

export default function Schedule() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "45px",
      }}
    >
      <Typography level="h1" sx={{ color: "#c92978", margin: "5px" }}>
        Schedule
      </Typography>
      <Table
        borderAxis="bothBetween"
        sx={{
          bordercolor: "#FFFFFF",
          border: "1px solid #c92978",
          backgroundColor: "transparent",
          borderRadius: "11px",
          overflow: "hidden",
          "& tr > *:not(:first-of-type)": { textAlign: "right" },
          width: {
            xs: "90%",
            sm: "70%",
            md: "60%",
            lg: "50%",
            xl: "40%",
          },
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                width: "40%",
                color: "#c92978",
                fontSize: "1.4em",
                textAlign: "center",
                backgroundColor: "transparent",
              }}
            >
              Time
            </th>
            <th
              style={{
                color: "#c92978",
                fontSize: "1.4em",
                textAlign: "center",
                backgroundColor: "transparent",
              }}
            >
              Event
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.date}>
              <td style={{ textAlign: "center" }}>{row.date}</td>
              <td style={{ textAlign: "center" }}>{row.event}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}
