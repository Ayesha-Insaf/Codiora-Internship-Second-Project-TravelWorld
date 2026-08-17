# TravelWorld

TravelWorld is a responsive travel-destination website for discovering places by travel style. It presents destination cards, searchable category filters, featured destinations, and detailed trip information in an interactive modal.

## Features

- Responsive desktop and mobile layout
- Destination browsing by category: Beach, Mountains, Historical, Adventure, Cultural, and Nature
- Live destination search by name or country
- Dynamic destination cards generated from a central data file
- Category counts that update from available destinations
- Detail modal with ratings, price, duration, best time to visit, entry requirements, and trip highlights
- Clickable destination image gallery in the detail modal
- Hero background slideshow, loading screen, scroll animations, and mobile navigation
- Beach destination cards with locally stored image assets

## Project Structure

```text
TravelWorld/
├── index.html          # Main page markup
├── css/
│   └── style.css       # Layout, responsive styling, and animations
├── js/
│   ├── data.js         # Destination content and image references
│   ├── script.js       # Rendering and page interactions
│   └── details.js      # Destination detail-page behavior
├── images/             # Local destination image assets
└── IMAGE-ATTRIBUTION.md # Attribution for applicable image assets
```

## Run Locally

No installation or build step is required.

1. Open the project folder in a code editor.
2. Start a local server from the project root. For example, use the **Live Server** extension in VS Code.
3. Open `index.html` in the browser through that local server.

Using a local server is recommended so browser caching and asset loading behave consistently.

## Customizing Destinations

All destination content is managed in `js/data.js`. Each item includes:

- Name, country, category, rating, and starting price
- Short and detailed descriptions
- Best time to visit, duration, entry requirements, and highlights
- An `images` array containing local image paths



## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Font Awesome

