import * as React from "react";
import List from "@mui/joy/List";
import Box from "@mui/system/Box";
import ListItem from "@mui/joy/ListItem";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";

export default function WorkshopsCard() {
  return (
    <Box
      sx={{
        border: "1px solid #c92978",
        borderRadius: "11px",
        justifyContent: "flex-end",
        width: "50%",
        minWidth: "sm",
      }}
    >
      <Typography
        level="h4"
        sx={{ my: 2, color: "#c92978", textAlign: "center" }}
      >
        Worshops and Advice to Help You Grow
      </Typography>
      <List>
        <ListItem nested sx={{ fontFamily: "sans-serif" }}>
          <ListSubheader
            sx={{
              fontSize: "1.4rem",
              borderBottom: "1px solid #c92978",
              paddingBottom: "5px",
              width: "50%",
              left: "25%",
            }}
          >
            Day 1
          </ListSubheader>
          <List>
            <ListItem>
              <ListItemButton sx={{ fontSize: "1.2rem" }}>
                Event 1
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ fontSize: "1.2rem" }}>
                Event 2
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested sx={{ fontFamily: "sans-serif", marginTop: "15px" }}>
          <ListSubheader
            sx={{
              fontSize: "1.4rem",
              borderBottom: "1px solid #c92978",
              paddingBottom: "5px",
              width: "50%",
              left: "25%",
            }}
          >
            Day 2
          </ListSubheader>
          <List>
            <ListItem>
              <ListItemButton sx={{ fontSize: "1.2rem" }}>
                Event 1
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ fontSize: "1.2rem" }}>
                Event 2
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
