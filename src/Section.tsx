import React from 'react';
import {Box} from "@mui/joy";

const Section = (props: {children: React.ReactNode}) => {
    return <Box sx={{p: "1rem", pl: "calc(calc(100vw - min(100vw, 1200px)) / 2)", pr: "calc(calc(100vw - min(100vw, 1200px)) / 2)"}}>
        {props.children}
    </Box>
}

export default Section