import React from "react";
// import Positions from "../data/positions.json";

interface TeamMemberCardProps {
  lastName: string;
  color: string;
  firstName: string;
  image: string;
}

function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <div
      className="teamMemberCard"
      style={{
        borderRadius: "15px",
        backgroundColor: "#3f4042",
        width: 210,
        height: 285,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        textAlign: "left",
      }}
    >
      <div
        className="teamMemberCardImage"
        style={{
          borderRadius: "5px",
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={props.image}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt={"Team Member Image"}
        />
      </div>
      <p
        style={{
          color: props.color,
          fontFamily: "Roboto",
          fontWeight: "bold",
          margin: "0px",
          paddingTop: "5px",
        }}
      >
        {props.firstName}
      </p>
      <p
        style={{
          color: "#E9E9E9",
          fontFamily: "Roboto",
          margin: "0px",
          fontSize: "24px",
        }}
      >
        {props.lastName}
      </p>
    </div>
  );
}

export default TeamMemberCard;
