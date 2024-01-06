import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { GitHub } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Card as MuiCard } from "@mui/joy";

interface Props {
  name: string;
  image_url: string;
  position: string;
  link: string;
}

function Card(props: Props) {
  return (
    <MuiCard>
      <AspectRatio minHeight="120px" maxHeight="200px" ratio="1/1">
        <img src={props.image_url} loading="lazy" alt="" />
      </AspectRatio>
      <div>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-sm">{props.position}</Typography>
      </div>

      {props.link.includes("github") ? (
        <Button
          component="a"
          href={props.link}
          target="_blank"
          startDecorator={<GitHub />}
        >
          GitHub
        </Button>
      ) : props.link.includes("linked") ? (
        <Button
          component="a"
          href={props.link}
          target="_blank"
          startDecorator={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      ) : (
        <Button
          component="a"
          href={"//mailto:" + props.link}
          target="_blank"
          startDecorator={<MailIcon />}
        >
          Email
        </Button>
      )}
    </MuiCard>
  );
}

export default Card;
