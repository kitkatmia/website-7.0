import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import logo from ".//mvhack_logo.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const drawerWidth = 240;
const navItems = ["Home", "FAQs", "Team", "Sponsors"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, width: "150px" }}>
        MVHACKS 7.0
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Box
                component="img"
                sx={{ height: 35, maxWidth: 160, mx: 1, borderRadius: "25%" }}
                alt="Logo"
                src={logo}
              />
            </Link>
            <Typography
              variant="h6"
              fontWeight="bold"
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              MVHACKS 7.0
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
            >
              <ButtonGroup
                size="small"
                aria-label="small button group"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "11px",
                  overflow: "hidden",
                }}
                sx={{ width: "70%" }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "#fff", textTransform: "none" }}
                    variant="contained"
                    style={{
                      margin: 0,
                      background:
                        "linear-gradient(to right,rgba(169,169,169, 0.5), rgba(168,168,168, 0.7), rgba(169,169,169, 0.5))",
                      border: "none",
                      fontSize: "90%",
                      boxShadow: "0 0 100px 0 rgba(169,169,169, 0.5)",
                      width: "100px",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                size="small"
                aria-label="small button group"
                sx={{
                  ml: 1,
                  width: "95px",
                  textTransform: "none",
                  borderRadius: "11px",
                }}
                variant="contained"
                color="success"
                style={{ border: "none", fontSize: "90%" }}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
