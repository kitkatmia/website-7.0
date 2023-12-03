import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import logo from "./mvhack_logo.png";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import MVDrawer from "./MVDrawer";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "FAQs", "Team", "Sponsors"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      display="flex"
      alignItems="center"
      component="nav"
      position="static"
      flexDirection="row"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <MVDrawer />
      <Link href="/">
        <Box
          component="img"
          sx={{ height: 35, maxWidth: 160, borderRadius: "25%" }}
          alt="Logo"
          src={logo}
          style={{ transform: "scale(1.5)", margin: "15px" }}
        />
      </Link>
      <Typography level="h2" sx={{ my: 2 }}>
        MVHACKS 7.0
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          marginLeft: "auto",
          minWidth: 550,
        }}
      >
        <ButtonGroup
          size="sm"
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
              variant="solid"
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
          size="sm"
          sx={{
            ml: 1,
            width: "95px",
            textTransform: "none",
            borderRadius: "11px",
          }}
          variant="solid"
          color="success"
          style={{ border: "none", fontSize: "90%" }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
