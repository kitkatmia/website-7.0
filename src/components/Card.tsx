import React from 'react';
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import {GitHub} from "@mui/icons-material";
import {Card as MuiCard} from "@mui/joy";

interface Props {
  name: string, 
  image_url: string,
  position: string,
    link: string,
}

function Card(props: Props) {
  return (
      <MuiCard>
          <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                  src={props.image_url}
                  loading="lazy"
                  alt=""
              />
          </AspectRatio>
          <div>
              <Typography level="title-lg">{props.name}</Typography>
              <Typography level="body-sm">{props.position}</Typography>
          </div>

          {/*<CardContent orientation="horizontal">*/}
          <Button component="a" href={props.link} startDecorator={<GitHub />}>
              GitHub
          </Button>
          {/*</CardContent>*/}
      </MuiCard>
  );
}

export default Card;
