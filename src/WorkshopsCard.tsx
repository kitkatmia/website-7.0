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
const stats = ["Beginner-friendly", "Prizes","Catered Food"
];

export default function WorkshopsCard() {
  return (
    <Box
      sx={{
        border: "1px solid #c92978",
        borderRadius: "11px",
        marginLeft: "auto",
        width: "50%",
        minWidth: "sm",
        background: "transparent",
      }}
    >
      <Typography
        level="h4"
        sx={{ my: 2, color: "#c92978", textAlign: "center" }}
      >
        Workshops and advice to help you grow
      </Typography>
      <Typography
        level="title-md"
        sx={{ my: 2, color: "#808080", textAlign: "center", margin: "10px" }}
      >
        With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginBottom="10px"
      >
        {stats.map((stat) => (
          <Item
            key={stat}
            sx={{ minWidth: "97px", width: "20%",  minHeight: "70px", height: "15%", margin: "7px", display: "flex", justifyContent: "center", alignItems: "center"}}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              {stat}
            </Typography>
          </Item>
        ))}
      </Grid>
    </Box>
  );
}
