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
const stats = [
  [87, "Participants"],
  [35, "Submissions"],
  [32, "Volunteers"],
];

export default function Stats() {
  return (
    <Box
      sx={{
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
        Where Boundaries Fade and Ideas Flourish
      </Typography>
      <Typography
        level="title-md"
        sx={{ my: 2, color: "#808080", textAlign: "center", margin: "10px" }}
      >
        MVHacks is proud to give a platform for aspiring tech enthusiasts to
        grow and learn by making unique projects that progress society.
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
            key={stat[0]}
            sx={{ minWidth: "97px", width: "20%",  minHeight: "70px", height: "15%", margin: "7px", justifyContent: "center", alignItems: "center"}}
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
        ))}
      </Grid>
    </Box>
  );
}
