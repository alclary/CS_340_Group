import React from "react";

export default function MovieGenreConfirmDelete() {
  return (
    <form>
      <label>
        Update a movie-genre relationship:
      </label>

      <label>
        Select a Movie:
        <select>
          <option>None</option>
          <option>
            Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
          </option>
          <option>Interstellar</option>
          <option>Amélie</option>
          <option>The Shining</option>
          <option>Everything Everywhere All at Once</option>
        </select>
      </label>

      <label>
        Genre Name
        <select>
        <option>None</option>
          <option>Documentary</option>
          <option>Kids</option>
          <option>Family</option>
          <option>Comedy</option>
          <option>Independent</option>
        </select>

        <button>Delete</button>
      </label>
    </form>
  );
}


