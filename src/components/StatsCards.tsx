import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/system/Box";
import { Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

type CardVariant = {
  visible: { opacity: number; x: number; transition: { duration: number } };
  hidden: { x: string; opacity: number };
};

const getBoxVariant = (
  index: number,
  animationPlayed: boolean
): CardVariant => {
  const hiddenVariant = {
    x: index % 2 === 0 ? "-100%" : "100%",
    opacity: 0,
  };

  if (animationPlayed) {
    hiddenVariant.x = "0";
  }
  return {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: hiddenVariant,
  };
};

type CardItem = [string[], string[], Array<[string, string]>];

const cardInfo: CardItem[] = [
  [
    ["Where Boundaries Fade and Ideas Flourish"],
    [
      "MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.",
    ],
    [
      ["87", "Participants"],
      ["35", "Submissions"],
      ["32", "Volunteers"],
    ],
  ],
  [
    ["Workshops and advice to help you grow"],
    [
      "With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve.",
    ],
    [
      ["", "Beginner-friendly"],
      ["", "Prizes"],
      ["", "Catered Food"],
    ],
  ],
  [
    ["Real world collaboration and innovation"],
    [
      "The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!",
    ],
    [
      ["", ""],
      ["", ""],
      ["", ""],
    ],
  ],
];

const Item = styled(Sheet)(({ theme }) => ({
  background: "linear-gradient(to bottom right, #787878, #292929)",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 10,
  color: "white",
}));

interface StatCardProps {
  card: CardItem;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ card, index }) => {
  const control = useAnimation();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !animationPlayed) {
      control.start("visible");
      setAnimationPlayed(true);
    }
  }, [control, inView, animationPlayed]);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView, animationPlayed]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={getBoxVariant(index, animationPlayed)}
      initial="hidden"
      animate={control}
    >
      <Box
        key={index}
        sx={{
          width: "100%",
          pl: "calc(calc(calc(100vw - min(100vw, 1200px)) / 2) + 1rem)",
          margin: "1%",
          marginBottom: "5%",
          padding: "0",
          display: "flex",
          justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
        }}
      >
        <Box
          sx={{
            border: "1px solid #c92978",
            borderRadius: "11px",
            width: {lg:"50%",md:"50%", sm:"100%", xs:"100%"},
            background: "transparent",
          }}
        >
          <Typography
            level="h4"
            sx={{ my: 2, color: "#c92978", textAlign: "center" }}
          >
            {card[0]}
          </Typography>
          <Typography
            level="title-md"
            sx={{
              my: 2,
              color: "#808080",
              textAlign: "center",
              margin: "10px",
            }}
          >
            {card[1]}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            marginBottom="10px"
          >
            {card[2].map((stat, statIndex) =>
              stat[1] !== "" ? (
                <Item
                  key={statIndex}
                  sx={{
                    minWidth: "97px",
                    width: "20%",
                    minHeight: "70px",
                    height: "15%",
                    margin: "7px",
                    display: stat[0] === "" ? "flex" : "block",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    }}
                  >
                    {stat[0]}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    }}
                  >
                    {stat[1]}
                  </Typography>
                </Item>
              ) : (
                <></>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default function StatsCards() {
  return (
    <>
      {cardInfo.map((card, index) => (
        <StatCard card={card} index={index} />
      ))}
    </>
  );
}
