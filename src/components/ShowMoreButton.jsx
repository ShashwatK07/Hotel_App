import { Box, Button, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfCardsToShow } from "../redux/actions";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ShowButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#393ce3",
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
  "&:hover": {
    backgroundColor: "#0069d9",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const numberOfCardsToShow = useSelector((state) => state.numberOfCardsToShow);

  const handleShowMoreClick = () => {
    dispatch(setNumberOfCardsToShow(numberOfCardsToShow + 3));
  };

  return (
    <Container>
      <ShowButton
        variant="contained"
        startIcon={<HourglassTopRoundedIcon />}
        onClick={handleShowMoreClick}
      >
        Show more
      </ShowButton>
    </Container>
  );
};

export default ShowMoreButton;
