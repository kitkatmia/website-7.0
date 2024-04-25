import Box from "@mui/joy/Box";
import Section from "../components/Section";
import NavBar from "../components/NavBar";
import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Card, Chip, Stack} from "@mui/joy";
import Footer from "../components/Footer";
import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Header from "../components/Header";
import IconButton from "@mui/joy/IconButton";
import {ChevronRight} from "@mui/icons-material";

const Ctf = () => {
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
                            {/*<Box*/}
                            {/*  action="https://api.web3forms.com/submit"*/}
                            {/*  method="POST"*/}
                            {/*  component="form"*/}
                            {/*  sx={{*/}
                            {/*    display: "flex",*/}
                            {/*    gap: 1,*/}
                            {/*    my: 2,*/}
                            {/*    alignSelf: "stretch",*/}
                            {/*    flexBasis: "80%",*/}
                            {/*  }}*/}
                            {/*>*/}
                            {/*  <input*/}
                            {/*    type="hidden"*/}
                            {/*    name="access_key"*/}
                            {/*    value="50e99b85-f308-4801-9635-b6e5c1459742"*/}
                            {/*  />*/}
                            {/*Access key is public anyway*/}
                            {/*<input type="hidden" name="subject" value="New sign-up" />*/}
                            {/*<input*/}
                            {/*  type="hidden"*/}
                            {/*  name="redirect"*/}
                            {/*  value="https://web3forms.com/success"*/}
                            {/*/>*/}
                            {/*<input*/}
                            {/*  type="checkbox"*/}
                            {/*  name="botcheck"*/}
                            {/*  id=""*/}
                            {/*  style={{ display: "none" }}*/}
                            {/*/>*/}
                            {/*<Input*/}
                            {/*  required*/}
                            {/*  autoFocus={true}*/}
                            {/*  id="email"*/}
                            {/*  name="email"*/}
                            {/*  type="email"*/}
                            {/*  size="lg"*/}
                            {/*  placeholder="Get notified"*/}
                            {/*  sx={{ flex: "auto" }}*/}
                            {/*/>*/}
                            <IconButton size="lg" variant="solid" color="primary" sx={{width: "100%"}} onClick={() => {
                                window.location.href = "https://forms.gle/bTZHFPv4Tc1KTrYJ9"
                            }}>
                                Submit Flags
                                <ChevronRight />
                            </IconButton>
                            {/*</Box>*/}
                        </Box>
                    </div>

                </Section>

                <Section>
                    <Typography level={"h1"}>
                        Capture the Flag
                    </Typography>
                    <Typography level={"h2"}>
                        What is Capture the Flag?
                    </Typography>
                    <Typography>
                    </Typography>
                    <Card>
                        <Stack direction={"row"}>
                            <span style={{fontSize: "xx-large"}}>1</span>
                            <p>Open </p>
                        </Stack>
                    </Card>
                    <Button size={"lg"} >Submit CTF</Button>
                </Section>

                <Footer></Footer>
            </Box>
        </div>

    );
};
export default Ctf;