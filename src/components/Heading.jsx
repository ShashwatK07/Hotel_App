import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Comp = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const SubText = styled(Typography)`
  width: 500px;
  white-space: break-word;
  word-wrap: break-word;
  margin: 20px 0;
`;

const Heading = () => {
  return (
    <Comp>
      <Typography variant="h3">Featured Listed Property</Typography>
      <SubText varient="h6">
        Real estate can be bought, sold, leased, or rented ,and can be a
        valuable investment opportunity.The value of real estate can be...
      </SubText>
    </Comp>
  );
};

export default Heading;
