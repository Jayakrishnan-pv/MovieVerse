# MovieVerse

## Description
MovieVerse is a React application that allows users to search for movies using the OMDB API. It displays a list of movies based on the search term entered by the user.

## How It Works
1. **Search Input**: Users can enter a movie name in the search input field.
2. **Search Icon**: Clicking the search icon triggers a search request to the OMDB API with the entered movie name.
3. **Display Results**: The application displays a list of movies that match the search term. If no movies are found, it shows a "No movies found" message.
4. **Movie Cards**: Each movie is displayed as a card showing the movie's poster, title, year, and type.

## OMDB API
The OMDB API is a RESTful web service to obtain movie information. It provides data about movies, series, and episodes, including details like title, year, genre, director, actors, plot, and more.

### Getting an API Token
To use the OMDB API, you need to obtain an API token:
1. Go to the [OMDB API website](http://www.omdbapi.com/apikey.aspx).
2. Sign up for a free API key by providing your email address.
3. Once you receive the API key, you can use it to make requests to the OMDB API.

## Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License.