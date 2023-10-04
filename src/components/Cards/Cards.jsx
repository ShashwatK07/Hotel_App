import React from "react";
import { useSelector } from "react-redux";
import EachCard from "./EachCard";
import data from "../../Data/data.json";
import { Box, styled } from "@mui/material";

const Comp = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Cards = () => {
  const activeCity = useSelector((state) => state.activeCity);
  const numberOfCardsToShow = useSelector((state) => state.numberOfCardsToShow);

  const filterCards = () => {
    if (activeCity === "View All") {
      return data;
    } else {
      return data.filter((hotelData) => hotelData.city === activeCity);
    }
  };

  const visibleCards = filterCards().slice(0, numberOfCardsToShow);

  return (
    <Comp>
      {visibleCards.map((hotelData, index) => {
        return <EachCard key={index} hotel={hotelData} />;
      })}
    </Comp>
  );
};

export default Cards;
