import React from "react";
import { Grid, _ } from "gridjs-react";

export default function Genres() {
    return (
        <div>
            <h3>Genres</h3>
            <p>Create, Retrieve, Update or Delete a Genre</p>
            <a href="./GenreNew" class="newPlus">
                Add new genre
            </a>
            <Grid
                data={[
                    [1, "Documentary"],
                    [2, "Kids"],
                    [3, "Family"],
                    [4, "Comedy"],
                    [5, "Independent"],
                    [6, "International"],
                    [7, "Drama"],
                    [8, "Musical"],
                    [9, "Thriller"],
                    [10, "Horror"],
                    [11, "Sci-Fi"],
                    [12, "Romance"],
                    [13, "Animated"],
                    [14, "Sports"],
                    [15, "Action"],
                    [16, "Cult Classic"],
                    [17, "Adventure"],
                    [18, "LGBTQ+"],
                    [19, "Crime"],
                    [20, "Mystery"],
                    [21, "Fantasy"],
                    [22, "Historical"],
                ]}
                columns={[
                    { name: "Genre ID", sort: true },
                    { name: "Genre Name", sort: true },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
