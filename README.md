# Airbnb Clone

This project is a simplified clone of Airbnb, built with Node.js, Express, EJS, and Tailwind CSS. It allows users to browse, favorite, and book homes, as well as manage listings as a host.

## Features
- Browse a list of homes
- View home details
- Book and reserve homes
- Favorite/unfavorite homes
- Host dashboard to manage listings
- Error handling and custom 404 page

## Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** EJS templates, Tailwind CSS
- **Database:** (Add your DB info here, e.g., MongoDB, SQLite)

## Project Structure
```
controllers/    # Route controllers
models/         # Data models
public/         # Static assets (CSS, images)
routes/         # Express route definitions
utils/          # Utility functions
views/          # EJS templates
app.js          # Main application entry point
```

## Getting Started
1. **Install dependencies:**
	```
	npm install
	```
2. **Start the server:**
	```
	npm run dev
	```
3. **Open your browser:**
	Visit `http://localhost:3000`

## Scripts
- `npm run dev` — Start the server with nodemon for development

## Customization
- Update database configuration in `utils/databaseUtil.js` as needed.
- Add or modify EJS templates in the `views/` directory.

## License
MIT