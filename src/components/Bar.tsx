import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Person {
  name: string,
  image_url: string
}

interface Props {
  position: string;
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
        "border": "2px solid #f2168b",
        "borderRadius": "20px",
        "margin": "10px",
        "outline": "none",
        "borderColor": "#f2168b",
        "boxShadow": "0 0 13px #f2168b"
    }}>
      <h2 style={{
        "float": "left",
        "margin": "10px"
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
