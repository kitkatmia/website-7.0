import React from "react";
import {Box, Card, Chip, Input} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Header from "./Header";
import {ArrowForward} from "@mui/icons-material";
import {styled} from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";

const ImagesContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10px',
    gap: "2rem",
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        '& img': {
            // width: '80% !important',
            height: '100% !important',
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
            <h3>Thank you to our sponsors for their generous support!</h3>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>

                <Grid>
                    <Card variant={"soft"} sx={{backgroundColor: "rgba(255,230,0,0.2)", border: "none", height: "100%"}}>
                        <h2 style={{color: "white"}}>Gold</h2>
                        <ImagesContainer>
                            <img src={"./images/malwarebytes.png"} style={{width: "25%"}} alt="Malware Bytes"/>
                        </ImagesContainer>
                    </Card>
                </Grid>
                <Grid>
                    <Card variant={"soft"} sx={{backgroundColor: "rgba(255,255,255,0.2)", border: "none", height: "100%"}}>
                        <h2 style={{color: "white"}}>Silver</h2>
                        <ImagesContainer>
                            <img src={"./images/crowdstrike.png"} style={{width: "25%"}} alt="crowdstrike"/>
                            <img src={"./images/corsair.png"} style={{width: "25%"}} alt="Corsair"/>
                        </ImagesContainer>
                    </Card>
                </Grid>
                <Grid>
                    <Card variant={"soft"} sx={{backgroundColor: "rgba(255,150,0,0.2)", border: "none", height: "100%"}}>
                        <h2 style={{color: "white"}}>Bronze</h2>
                        <ImagesContainer>
                            <img src={"./images/knowbe4.png"} style={{width: "35%"}} alt="KnowBe4"/>
                            <img src={"./images/hulanetworks.png"} style={{width: "35%"}} alt="Hula Networks"/>
                        </ImagesContainer>
                    </Card>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Sponsors;
