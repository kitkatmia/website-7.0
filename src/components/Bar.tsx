import React from 'react';
import Card from './Card';
import Positions from "../data/positions.json";

interface Props {
  position: "Directors" | "Sponsorship" | "Tech" | "Event" | "Outreach",
  color: string
}

function Bar(props: Props) {
  return (
    <div className="bar" style={{
        "border": "2px solid " + props.color,
        "borderRadius": "20px",
        "margin": "10px",
        "outline": "none",
        "borderColor": props.color,
        "boxShadow": "0 0 13px " + props.color
    }}>
      <h2 style={{
        "float": "left",
        "margin": "15px",
        "color": "#f2168b"
      }}>{props.position}</h2>
      <br></br>
      <div className="cardsContainer" style={{
        "margin": "20px",
        "display": "inline-block"
      }}>
      {Positions[props.position].map((person) => {
        return <Card key={person.name} name={person.name} image_url={person.image_url} position={props.position}></Card>
      })}
      </div>
    </div>
  );
}

export default Bar;
