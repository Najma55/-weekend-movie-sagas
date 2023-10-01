# Movie Management Application

**Duration**: 2 Weeks

This project is a movie management application that allows users to view a list of movies, each with their details, including title, description, genres, and an image. Users can navigate between the list of movies and the detailed view for each movie. The application is built using React, Redux, and Saga for handling asynchronous actions.

## Problem Statement

The goal of this project is to implement a common UI pattern - going from a list view to a detailed view for a single item, in this case, movies. Additionally, it involves handling many-to-many relationships between movies and genres using a junction table in the database.

## How It Works

### Home / List Page

- Displays a list of movies from the database.
- Each movie is represented as a card with a movie poster.
- Users can click on a movie poster to view the details of that movie.

### Details Page

- Shows all details for the selected movie, including title, description, and all associated genres.
- Users can navigate back to the Home/List Page using a "Back to List" button.

### Database Setup

1. Create a database named `saga_movies_weekend`.
2. Run the queries from `database.sql` on the `saga_movies_weekend` database to set up the necessary tables and data.

### Movie Poster Images

- Movie posters are stored in the `public/images` folder.
- The database is configured to use these images for movies.
- Users can add their own posters by placing image files in this folder.

## Installation

To run the application, follow these steps:

1. Create a database named `saga_movies_weekend`.
2. Run the queries in the `database.sql` file to set up the database schema and data.
3. Open your terminal and navigate to the project directory.
4. Run `npm install` to install the project dependencies.
5. Start the server by running `npm run server` in the terminal.
6. Start the client by running `npm run client` in the terminal.
7. Your default web browser should open, and you can use the application.

## Usage

1. When you open the application, you'll land on the Home/List Page.
2. Here, you can see a list of movies represented as cards with movie posters.
3. Click on any movie poster to view the Details Page for that movie.
4. On the Details Page, you can see all the details of the selected movie, including its title, description, and associated genres.
5. To go back to the Home/List Page, click the "Back to List" button.

## Technologies Used

- React
- Redux
- Redux Saga
- Node.js
- Express.js
- PostgreSQL
- HTML/CSS

## License

This project is licensed under the MIT License.

## Acknowledgment

Special thanks to Prime Digital Academy for providing the knowledge and support to develop this application.

## Support

If you have any suggestions or encounter issues, please feel free to reach out to me at [your email address]. Your feedback is valuable and will help improve the project.
