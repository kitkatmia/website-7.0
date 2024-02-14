import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import { Link as RouterLink } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";

export default function MVDrawer() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    ["Home", "/"],
    ["FAQs", "/faqs"],
    ["Team", "/team"],
    ["Sponsors", "/sponsorship"],
  ];
  
  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        style={{ border: "none", transform: "scale(1.5)" }}
        sx={{
          mr: 2,
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <RouterLink
              to={item[1]}
              key={item[0]}
              style={{
                textDecoration: "none",
                color: "inherit",
                border: "none",
                margin: 0,
              }}
            >
              <ListItemButton sx={{ fontWeight: "lg" }}>{item[0]}</ListItemButton>
            </RouterLink>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
