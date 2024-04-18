import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Box from "@mui/joy/Box";
import Footer from "../components/Footer";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from "@mui/joy";
interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is a hackathon?",
    answer: `A hackathon is a competitive educational event in which students come together to develop an idea for a project
        into a real product. MVHacks will provide hackers with educational resources,
        including seminars and mentors, and an environment that will enable their success.`,
  },
  {
    question: "How much does it cost?",
    answer:
      "It is completely free! All food, swag, and prizes are provided at no charge.",
  },
  {
    question: "What about food?",
    answer: `MVHacks will provide a free lunch to all participants!`,
  },
  {
    question: "When / Where is this taking place?",
    answer: `8am to 8pm on Sunday, April 28th, 2024 at Mountain View, California's Hacker Dojo.`,
  },
  {
    question: "How long will this hackathon be?",
    answer: `12 hours (one-day event)!`,
  },
  {
    question: "Do I need programming experience?",
    answer: `No - this is a fantastic learning opportunity! Hackers can expect to be able to attend
        educational workshops run by industry professionals in addition to experienced adult mentors
        to help them learn and succeed.`,
  },
  {
    question: "Who can attend?",
    answer: `All high school students are eligible to attend MVHacks as hackers.
        Interested in attending but not a high school student? Consider signing up to be a mentor.`,
  },
  {
    question: "What do I need?",
    answer: `For the event, all you need is your school ID, laptop, charger, and a desire to hack!`,
  },
  {
    question: "Do I need a team?",
    answer: `Teams of up to 4 are allowed. You may work as an individual, but we recommend collaborating. There will be a team mixer at
         start of the hackathon.`,
  },
  {
    question: "What are the rules?",
    answer: `Be nice, respectful, and have fun! Hackers are expected to behave appropriately and safely at all times, and abide by the MLH Code of Conduct.`,
  },
];

const Faq = () => {
  return (
    <Box>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <AccordionGroup>
          {questions.map(value => {
            return <Accordion>
              <AccordionSummary>{value.question}</AccordionSummary>
              <AccordionDetails>{value.answer}</AccordionDetails>
            </Accordion>
          })}
          <Accordion>
            <AccordionSummary>I have other questions!</AccordionSummary>
            <AccordionDetails>Contact us by email at <a href="mailto:contact@mvhacks.io">contact@mvhacks.io</a></AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Footer></Footer>
    </Box>
  );
};
export default Faq;
