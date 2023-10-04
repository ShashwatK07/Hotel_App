import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, styled, Button, Divider, Stack } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import "./EachCard.css";

const Comp = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  height: 500px;
  margin: 20px;
  padding: 16px;
  border-radius: 15px;
  background: #f1f5fb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ImageBox = styled(Box)`
  max-width: 100%;
  position: relative;
`;
const Image = styled("img")`
  max-width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const AddressBox = styled(Box)`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const iconStyle = {
  color: "#F7B33E",
};

const TextOverlay = styled(Stack)`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f1f1f1;
  border-radius: 20px;
  padding: 5px 10px;
  color: #393ce3;
`;

const LikeButton = styled(Stack)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f1f1f1;
  color: #393ce3;
  border-radius: 50%;
  padding: 7px;
`;

const Address = styled(Typography)`
  color: #292a2b;
  font-size: 14px;
`;

const Name = styled(Typography)`
  margin-left: 10px;
  width: 300px;
  white-space: break-word;
  word-wrap: break-word;
`;

const Features = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const DetailsBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Price = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Rate = styled(Typography)`
  color: #393ce3;
  font-weight: 600;
`;

const ShowButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  border: "2px solid",
  padding: "6px 12px",
  lineHeight: 1.5,
  borderRadius: "50px",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),

  "&:active": {
    boxShadow: "none",
    border: "2px solid",
    color: "blue",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const EachCard = ({ hotel, disableLink }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const cardContent = (
    <Box>
      <AddressBox>
        <PlaceOutlinedIcon style={iconStyle} />
        <Address>{hotel.address}</Address>
      </AddressBox>
      <Name variant="h6">
        {hotel.name} - {hotel.address}
      </Name>
      <Features>
        <DetailsBox>
          <CorporateFareIcon />
          <Typography>{hotel.number_of_rooms} Room</Typography>
        </DetailsBox>
        <Divider
          orientation="vertical"
          style={{ borderStyle: "dashed" }}
          flexItem
        ></Divider>
        <DetailsBox>
          <KingBedOutlinedIcon />
          <Typography>{hotel.number_of_beds} Bed</Typography>
        </DetailsBox>
        <Divider
          orientation="vertical"
          style={{ borderStyle: "dashed" }}
          flexItem
        ></Divider>
        <DetailsBox>
          <BathtubOutlinedIcon />
          <Typography>{hotel.bath} Bath</Typography>
        </DetailsBox>
        <Divider
          orientation="vertical"
          style={{ borderStyle: "dashed" }}
          flexItem
        ></Divider>
        <DetailsBox>
          <ControlCameraOutlinedIcon />
          <Typography>{hotel.square_feet} sft</Typography>
        </DetailsBox>
      </Features>
      <Divider style={{ borderStyle: "dashed" }} flexItem></Divider>
      <Footer>
        <Box>
          <Price>
            <Rate variant="h6">${hotel.cost_per_month}</Rate>/ month
          </Price>
        </Box>
        <ShowButton variant="outlined" color="primary">
          Read More
        </ShowButton>
      </Footer>
    </Box>
  );

  return (
    <Comp>
      <ImageBox>
        <TextOverlay direction="column" alignItems="flex-start">
          <Typography>For Rent</Typography>
        </TextOverlay>

        <LikeButton
          direction="column"
          alignItems="flex-start"
          onClick={toggleLike}
        >
          {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
        </LikeButton>

        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt={hotel.name}
        />
      </ImageBox>
      <Link to={`/property/${hotel.id}`} className="custom-link">
        {cardContent}
      </Link>
    </Comp>
  );
};

export default EachCard;
