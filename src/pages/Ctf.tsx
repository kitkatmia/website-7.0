import Box from "@mui/joy/Box";
import Section from "../components/Section";
import NavBar from "../components/NavBar";
import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Card, Chip, Stack, Table} from "@mui/joy";
import Footer from "../components/Footer";
import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Header from "../components/Header";
import IconButton from "@mui/joy/IconButton";
import {ChevronRight, LogoDev} from "@mui/icons-material";

const Ctf = () => {
    const ctfs = [{
        name: "RSA 1",
        description: "What is RSA? Given, decrypt the flag!",
        hints: [
            <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Operation">RSA</a>
        ],
        downloads: [
            {
                name: "Script",
                link: "/rsa-1.py",
            },
            {
                name: "Output",
                link: "/rsa-1.txt",
            }
        ]
    },
    {
        name: "RSA 2",
        description: "Mr. Fermat would be very happy about this one...",
        hints: [
            "What is Fermat factorization?"
        ],
        downloads: [
            {
                name: "Script",
                link: "/rsa-2.py",
            },
            {
                name: "Output",
                link: "/rsa-2.txt",
            }
        ]
    },
    {
        name: "Baconian",
        description: "Decrypt the cipher!",
        hints: [],
        downloads: [
            {
                name: "Script",
                link: "/baconian.py",
            },
        ]
    },
    {
        name: "Crowdstrike",
        description: "The flag is somewhere close to the Crowdstrike banner",
        hints: [],
        downloads: []
    },
    {
        name: "This website",
        description: "This website hides a flag!",
        hints: [],
        downloads: []
    }
]
    return (
        <div>
            <Box>
                <Section>
                    <NavBar />
                </Section>
                <Section>
                    <div className={"two-col"}>
                        <Box>
                            <Chip size="lg" variant="outlined" color="neutral">
                                Hackathon Activity
                            </Chip>
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >Capture the Flag</Typography>
                            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" paddingTop={2} paddingBottom={2}>
                                Capture the Flag (CTF) is a cybersecurity competition where participants solve challenges to find hidden flags. These flags are strings of text that are hidden in the challenges. The goal is to find as many flags as possible to score points and win the competition.
                            </Typography>
                            
                            <IconButton size="lg" variant="solid" color="primary" sx={{width: "100%"}} onClick={() => {
                                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeeEKG1pTti1yZ_eVuh7ns_QXVKiTwlgMwLrsrW3ByWGVUs4Q/viewform?usp=sf_link"
                            }}>
                                Submit Flags
                                <ChevronRight />
                            </IconButton>
                        </Box>
                    </div>

                </Section>

                <Section>
                    <Table>
                    <thead>
        <tr>
          <th>CTF Name</th>
          <td>Description</td>
          <th>Downloads</th>
          <th>Hints</th>
        </tr>
      </thead>
      <tbody>
        {ctfs.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{row.downloads.map((dl) => (
                <div>
                    <a href={dl.link}>{dl.name}</a>
                    <br/>
                </div>
            ))}
            </td>
            <td>
                {row.hints.map((hint, idx) => (
                    <details>
                        <summary>Hint {idx + 1}</summary>
                        {hint}
                    </details>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
                    </Table>
                </Section>

                <Footer></Footer>
            </Box>
        </div>

    );
};
export default Ctf;