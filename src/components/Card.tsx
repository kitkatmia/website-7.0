import React from 'react';

interface Props {
  name: string, 
  image_url: string,
  position: string,
}

function Card(props: Props) {
  return (
    <div style={{
      "display": "inline-block",
      "margin": "10px"
    }}>
        <img width='100' height='100' src={props.image_url} alt={"A picture of " + props.name}></img>
        <p>{props.name}</p>
        <p>{props.position}</p>
    </div>
  );
}

export default Card;
