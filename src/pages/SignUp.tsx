import Box from "@mui/joy/Box";
import Section from "../components/Section";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import ImageCarousel from "../components/ImageCarousel";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export const SignUp = () => {
    return (
        <Box>
            <Section>
                <NavBar />
            </Section>
            <Section>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", height: "65vh"}}>
                    <Typography level="h1" sx={{paddingBottom: "1rem"}}>I want to sign up as a...</Typography>

                    <Button variant={"solid"} size={"lg"} onClick={() => {
                        window.location.href = "http://tinyurl.com/mvh7apply"
                    }}>Hacker ›</Button>
                    <Button variant={"solid"} size={"lg"} onClick={() => {
                        window.location.href = "http://tinyurl.com/mvh7mentor"
                    }}>Mentor ›</Button>
                    <Button variant={"solid"} size={"lg"} onClick={() => {
                        window.location.href = "http://tinyurl.com/mvh7judge"
                    }}>Judge ›</Button>
                </div>
            </Section>

            <Footer></Footer>
        </Box>

    )
}