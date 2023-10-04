// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards/Cards";
import ShowMoreButton from "./components/ShowMoreButton";
import HotelPage from "./components/HotelPage"; // Import the HotelPage component

const App = () => {
  return (
    <Router>
      <Box>
        <Heading />
        <Switch>
          <Route path="/" exact>
            <Tabs />
            <Cards />
            <ShowMoreButton />
          </Route>
          <Route path="/property/:id">
            <HotelPage />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
