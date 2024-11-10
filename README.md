# Recipe Finder

Recipe Finder is a web application that allows users to search for recipes, view detailed recipe information, add recipes to their wishlist, and rate recipes.

## Features

- **Search Recipes**: Search for recipes by name.
- **View Recipe Details**: View detailed information about a recipe, including ingredients, instructions, and a video tutorial.
- **Add to Wishlist**: Add recipes to your wishlist for easy access later.
- **Rate Recipes**: Rate recipes and view average ratings.

## Technologies Used

- **Frontend**: React, Axios, React Toastify
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: TheMealDB API

## ENV data
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>MONGO_URI</strong>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>FIREBASE_DATABASE_URL</strong>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>ADMIN</strong>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>SUBSCRIPTION_KEY</strong>
  </div>
</div>

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder

2. Install dependencies for backend
    ```bash
    cd BackEnd
    npm install


3. Install dependencies for frontend
    ```bash
    cd ../FrontEnd
    npm install

## Running the Application:

1. Start the backend server:
    ```bash
    cd BackEnd
    npm start

2. Start the frontend development server:
    ```bash
    cd ../FrontEnd
    npm start

3. Open your browser and navigate to http://localhost:3000.

## API Endpoints

- GET /recipes: Fetch all recipes.
- GET /recipe/:id/ratings: Fetch average rating for a recipe.
- POST /wishlist: Add a recipe to the wishlist.
- GET /wishlist: Fetch all recipes in the wishlist.
- POST /login: Authenticate user and return a token.
- POST /register: Register a new user.
- GET /recipe/:id: Fetch details of a specific recipe.
- POST /recipe/:id/rate: Rate a specific recipe.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- TheMealDB for providing the recipe data.
- React Toastify for toast notifications.
