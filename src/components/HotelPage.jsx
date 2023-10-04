import React from "react";
import { useParams } from "react-router-dom";
import EachCard from "./Cards/EachCard";
import data from "./../Data/data.json";
import { Box, styled } from "@mui/material";

const Comp = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const HotelPage = () => {
  const { id } = useParams();

  const selectedHotel = data.find((hotel) => hotel.id == id);
  console.log("Selected Hotel:", selectedHotel);

  return (
    <Comp>
      {selectedHotel ? (
        <EachCard hotel={selectedHotel} disableLink={true} />
      ) : (
        <p>Hotel not found</p>
      )}
    </Comp>
  );
};

export default HotelPage;
