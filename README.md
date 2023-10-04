# Featured Listed Property App

This is a simple React-based web application that allows users to browse and view featured properties in different cities. Users can filter properties by city, view property details, and load more properties as needed. The application is designed with modularity in mind and utilizes React Router for navigation.

## Table of Contents

Usage
Components
Redux State Management
Data Source

## Usage

- The application displays a featured property heading and a brief description on the home page.
- Users can click on city tabs or the "View All" tab to filter properties by city.
- Users can click on individual property cards to view detailed information about the selected property.
- The "Show More" button allows users to load more property cards.

## Components

The application is composed of the following components:

- App.js: The main component that sets up routing and renders other components based on the URL path.

- Heading.jsx: Displays the featured property heading and description.

- Tabs.jsx: Provides city filter tabs and a "View All" tab. Users can click on tabs to filter properties by city.

- Cards.jsx: Renders property cards based on the selected city and the number of cards to display. Uses Redux state for city and card count.

- HotelPage.jsx: Displays detailed information about a selected property. Accessed by clicking on a property card.

- ShowMoreButton.jsx: A button that loads more property cards when clicked. Increases the number of cards to display.

## Redux State Management

The application uses Redux for state management. It manages the following pieces of state:

- activeCity: Represents the currently selected city for filtering properties.
- numberOfCardsToShow: Tracks the number of property cards to display on the home page.

Redux actions and reducers are used to update and retrieve these states.

## Data Source

The application uses a local JSON file (data.json) as the data source. This file contains information about various properties, including their names, cities, and descriptions. The application filters and displays properties based on this data.
