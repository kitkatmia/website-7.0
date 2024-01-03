import * as React from "react";
import Box from "@mui/system/Box";
import { Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

const Item = styled(Sheet)(({ theme }) => ({
  background: `linear-gradient(to right, #878787, #4d4d4d)`,
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 10,
  color: "white",
}));
const cardInfo = [
  [
    ["Where Boundaries Fade and Ideas Flourish"],
    [
      "MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.",
    ],
    [
      ["87", "Participants"],
      ["35", "Submissions"],
      ["32", "Volunteers"],
    ],
  ],
  [
    ["Workshops and advice to help you grow"],
    [
      "With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.",
    ],
    [
      ["", "Beginner-friendly"],
      ["", "Prizes"],
      ["", "Catered Food"],
    ],
  ],
  [
    ["Real world collaboration and innovation"],
    [
      "The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!",
    ],
    [
      ["", ""],
      ["", ""],
      ["", ""],
    ],
  ],
];

export default function Stats() {
  return (
    <>
      {cardInfo.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            // p: "1rem",
            pl: "calc(calc(calc(100vw - min(100vw, 1200px)) / 2) + 1rem)",
            margin: "1%",
            marginBottom: "2%",
            padding: "0",
            display: "flex",
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
          }}
        >
          <Box
            sx={{
              // TODO: fix scaling on mobile
              border: "1px solid #c92978",
              borderRadius: "11px",
              width: "50%",
              minWidth: "sm",
              background: "transparent",
            }}
          >
            <Typography
              level="h4"
              sx={{ my: 2, color: "#c92978", textAlign: "center" }}
            >
              {card[0]}
            </Typography>
            <Typography
              level="title-md"
              sx={{
                my: 2,
                color: "#808080",
                textAlign: "center",
                margin: "10px",
              }}
            >
              {card[1]}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              marginBottom="10px"
            >
              {card[2].map((stat, statIndex) =>
                stat[1] !== "" ? (
                  <Item
                    key={statIndex}
                    sx={{
                      minWidth: "97px",
                      width: "20%",
                      minHeight: "70px",
                      height: "15%",
                      margin: "7px",
                      display: stat[0] === "" ? "flex" : "block",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      }}
                    >
                      {stat[0]}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      }}
                    >
                      {stat[1]}
                    </Typography>
                  </Item>
                ) : (
                  <></>
                )
              )}
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
}
