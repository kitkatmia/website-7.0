import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Section from "./Section";
import Hero from "./Hero";
import Box from "@mui/joy/Box";
import Stats from "./Stats";
import WorkshopsCard from "./WorkshopsCard";


const Home = () => {
	return (
		<Box>
			<Section>
				<NavBar />
			</Section>
			<Section>
				<Hero></Hero>
			</Section>
			<Section>
				<Stats></Stats>
			</Section>
			<Section><WorkshopsCard></WorkshopsCard></Section>
		</Box>
	)
}
export default Home;