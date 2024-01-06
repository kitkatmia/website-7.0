import * as React from "react";
import Button from "@mui/joy/Button";
import logo from "../data/mvhack_logo.png";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import MVDrawer from "./MVDrawer";
import { Link as RouterLink } from "react-router-dom";
interface Props {
  window?: () => Window;
}

const navItems = [
  ["Home", "/"],
  ["FAQs", "/faqs"],
  ["Team", "/team"],
  ["Sponsors", "/"],
];

export default function NavBar(props: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      component="nav"
      position="static"
      flexDirection="row"
      style={{ background: "transparent", boxShadow: "none", width: "100%" }}
    >
      <MVDrawer />
      <Box
        component="img"
        sx={{ height: 32, maxWidth: 160, borderRadius: "25%" }}
        alt="Logo"
        src={logo}
        style={{ transform: "scale(1.5)", margin: "15px" }}
      />
      <Typography level="h2" sx={{ my: 2 }}>
        MVHacks 7.0
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
          sx={{ width: "80%" }}
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
              <Button
                key={item[0]}
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  margin: 0,
                  background:
                    "linear-gradient(to right,rgba(169,169,169, 0.5), rgba(168,168,168, 0.7), rgba(169,169,169, 0.5))",
                  border: "none !important",
                  boxShadow:
                    "inset 0 0 100px 0 linear-gradient(90deg, rgba(169,169,169, 0.5) 0%, rgba(169,169,169, 0) 100%)",
                  fontSize: "90%",
                  minWidth: "100px",
                  width: "25%",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(to right,rgba(169,169,169, 0.5), rgba(168,168,168, 1.1), rgba(169,169,169, 0.5))",
                  },
                }}
              >
                {item[0]}
              </Button>
            </RouterLink>
          ))}
        </ButtonGroup>
        <RouterLink
          to={"http://localhost:3000/#email"}
          key={"Sign up"}
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "none",
            margin: 0,
          }}
        >
          <Button
            size="sm"
            sx={{
              ml: 1,
              flexShrink: 0,
              minWidth: "80px",
              width: "20%",
              textTransform: "none",
              borderRadius: "11px",
            }}
            variant="solid"
            color="success"
            style={{ border: "none", fontSize: "90%" }}
              onClick={(evt) => {
                  document.getElementById("email")?.focus();
            }}
          >
            Sign Up
          </Button>
        </RouterLink>
      </Box>
    </Box>
  );
}
