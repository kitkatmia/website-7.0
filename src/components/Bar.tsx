import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Person {
  name: string,
  image_url: string
}

interface Props {
  position: string,
  color: string
}

function Bar(props: Props) {
  let [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    fetch("/positions.json").then(res => res.json()).then(res => {
      setPeople(res[props.position])
  })
  }, [props.position])
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
      <div className="cardsContainer" style={{
        "margin": "20px"
      }}>
      {people.map((person) => {
        return <Card name={person.name} image_url={person.image_url} position={props.position}></Card>
      })}
      </div>
    </div>
  );
}

export default Bar;
