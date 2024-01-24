import React from "react";
import { Box, Chip, Input } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Header from "./Header";
import { ArrowForward } from "@mui/icons-material";

const Sponsors = () => {
    return (

        <Box style={{
            textAlign: "center",
            color: "#dc428e",
            border: "1px solid #c92978",
            borderRadius: "11px",


        }}>
            <h1>Sponsors</h1>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <img src={"./images/crowdstrike.png"} style={{ height: "275px", paddingLeft: "10px" }} />
                <img src={"./images/knowbe4.png"} style={{ height: "150px", paddingLeft: "20px"}} />
                <img src={"./images/gen.png"} style={{ height: "110px", paddingLeft: "50px" }} />
            </div>
        </Box>
    );
};

export default Sponsors;
