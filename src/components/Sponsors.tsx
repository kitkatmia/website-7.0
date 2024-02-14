import React from "react";
import { Box, Chip, Input } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Header from "./Header";
import { ArrowForward } from "@mui/icons-material";
import {styled} from "@mui/joy/styles";

const ImagesContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: '10px',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        '& img': {
            width: '80% !important',
            paddingLeft: '0',
            paddingTop: '25px',
            paddingBottom: '25px',
        },
    },
}));


const Sponsors = () => {
    return (

        <Box style={{
            textAlign: "center",
            color: "#dc428e",
            border: "1px solid #c92978",
            borderRadius: "11px",


        }}>
            <h1>Sponsors</h1>
            <ImagesContainer>
                <img src={"./images/crowdstrike.png"} style={{ width: "25%" }} alt="crowdstrike"/>
                <img src={"./images/knowbe4.png"} style={{ width: "35%"}} alt="KnowBe4" />
                <img src={"./images/gen.png"} style={{ width: "25%" }} alt="Gen" />
            </ImagesContainer>
            <br/>
            <ImagesContainer>
                <img src={"./images/corsair.png"} style={{ width: "25%" }} alt="Corsair" />
                <img src={"./images/hulanetworks.png"} style={{ width: "35%" }} alt="Hula Networks" />
                <img src={"./images/malwarebytes.png"} style={{ width: "25%" }} alt="Malware Bytes" />
            </ImagesContainer>
        </Box>
    );
};

export default Sponsors;
