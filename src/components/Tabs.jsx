import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCity, setNumberOfCardsToShow } from "../redux/actions";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

const Container = styled(Stack)`
  display: flex;
  margin: 0 60px;
  padding: 10px 10px;
  justify-content: space-between;
`;

const Tabs = () => {
  const activeChip = useSelector((state) => state.activeCity);
  const dispatch = useDispatch();

  const handleClick = (label) => {
    dispatch(setNumberOfCardsToShow(6));
    dispatch(setActiveCity(label));
  };

  return (
    <Container direction="row" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Chip
          label="New York"
          onClick={() => handleClick("New York")}
          color={activeChip === "New York" ? "primary" : "default"}
        />
        <Chip
          label="Mumbai"
          onClick={() => handleClick("Mumbai")}
          color={activeChip === "Mumbai" ? "primary" : "default"}
        />
        <Chip
          label="Paris"
          onClick={() => handleClick("Paris")}
          color={activeChip === "Paris" ? "primary" : "default"}
        />
        <Chip
          label="London"
          onClick={() => handleClick("London")}
          color={activeChip === "London" ? "primary" : "default"}
        />
      </Stack>
      <Chip
        label="View All &#8594;"
        variant="outlined"
        onClick={() => handleClick("View All")}
        color={"primary"}
      />
    </Container>
  );
};

export default Tabs;
