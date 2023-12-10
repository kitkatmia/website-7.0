import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import logo from "./mvhack_logo.png";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import MVDrawer from "./MVDrawer";

interface Props {
  window?: () => Window;
}

const navItems = ["Home", "FAQs", "Team", "Sponsors"];

export default function NavBar(props: Props) {
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
          sx={{ height: 32, maxWidth: 160, borderRadius: "25%" }}
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
            border: "none",
            borderRadius: "11px",
            overflow: "hidden",
          }}
          sx={{ width: "70%" }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                textTransform: "none",
                color: "#fff",
                margin: 0,
                background:
                  "linear-gradient(to right,rgba(169,169,169, 0.5), rgba(168,168,168, 0.7), rgba(169,169,169, 0.5))",
                border: "none !important",
                fontSize: "90%",
                boxShadow: "0 0 100px 0 rgba(169,169,169, 0.5)",
                width: "100px",
                transition: "background-color 0.3s",
                "&:hover": {
                  background:
                    "linear-gradient(to right,rgba(169,169,169, 0.5), rgba(168,168,168, 1.3), rgba(169,169,169, 0.5))",
                },
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
