import * as React from "react";
import Button from "@mui/joy/Button";
import logo from "../data/mvhack_logo.png";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import MVDrawer from "./MVDrawer";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
interface Props {
  window?: () => Window;
}

const navItems = [
  ["Home", "/"],
  // ["CTF", "/ctf"],
  ["FAQs", "/faqs"],
  ["Team", "/team"],
  ["Apply", "/apply"],
  ["Sponsors", "/sponsorship"],
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
      <Link href={"/"}>
        <Box
          component="img"
          sx={{ height: 32, maxWidth: 200, borderRadius: "25%" }}
          alt="Logo"
          src={logo}
          style={{ transform: "scale(1.5)", margin: "15px" }}
        />
        <Typography level="h2" sx={{ my: 2 }}>
          MVHacks 7.0
        </Typography>
      </Link>

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
            borderRadius: "5px",
            overflow: "hidden",
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
              <Button
                key={item[0]}
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  margin: 0,
                  background:
                    "linear-gradient(to right,rgba(148, 148, 148, 0.5), rgba(125, 125, 125, 0.7), rgba(148, 148, 148, 0.5))",
                  border: "none !important",
                  boxShadow:
                    "inset 0 0 100px 0 linear-gradient(90deg, rgba(148, 148, 148, 0.5) 0%, rgba(148, 148, 148, 0) 100%)",
                  fontSize: "90%",
                  minWidth: "100px",
                  width: "25%",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(to right,rgba(148, 148, 148, 0.5), rgba(125, 125, 125, 1.1), rgba(148, 148, 148, 0.5))",
                  },
                }}
              >
                {item[0]}
              </Button>
            </RouterLink>
          ))}
        </ButtonGroup>
        <Button
          size="sm"
          sx={{
            ml: 1,
            flexShrink: 0,
            minWidth: "100px",
            width: "10%",
            textTransform: "none",
            borderRadius: "11px",
          }}
          variant="solid"
          color="success"
          style={{ border: "none", fontSize: "90%" }}
          onClick={() => {
            window.location.href = "https://tinyurl.com/mvh8interest";
          }}
        >
          Alert Me
        </Button>
      </Box>
    </Box>
  );
}
