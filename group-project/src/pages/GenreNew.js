import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const GenreNew = () => {
  return (
    <>
      <article>
        <h2>New genre form</h2>
        <p>New genre alert</p>
        <form>
          <label>
            Genre Name:
            <input type="text" required />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Genre">Return to all genres</a>

    </>
  );
};

export default GenreNew;

// export const CustomerNew = () => {
//   const [name, setName] = useState("");
//   const [reps, setReps] = useState("");
//   const [weight, setWeight] = useState("");
//   const [unit, setUnit] = useState("lbs");
//   const [date, setDate] = useState("");

//   const history = useHistory();

//   const addCustomer = async () => {
//     const newCustomer = { name, reps, weight, unit, date };

//     const response = await fetch("/customers", {
//       method: "post",
//       body: JSON.stringify(newCustomer),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 201) {
//       alert("Successfully added the exercise!");
//     } else {
//       alert(`Failed to add exercise, status code = ${response.status}`);
//     }
//     history.push("/");
//   };

{
  /* <form
onSubmit={(e) => {
  e.preventDefault();
}}
>
<fieldset id="editfieldset">
  <legend>Which exercise are you adding?</legend>
  <ul>
    <li>
      <label for="title">Exercise name</label>
      <input
        type="text"
        placeholder="eg: squats"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
      />
    </li>
    <li>
      <label for="reps">Reps completed</label>
      <input
        type="number"
        value={reps}
        min="0"
        placeholder="5"
        onChange={(e) => setReps(e.target.value)}
        id="reps"
      />
    </li>
    <li>
      <label for="weight">Weight</label>
      <input
        type="number"
        min="0"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        id="weight"
      />
    </li>
    <li>
      <label for="unit">Unit</label>
      <select>
        <option
          value="lbs"
          onChange={(e) => setUnit(e.target.value)}
          id="unit"
        >
          lbs
        </option>
        <option
          value="kgs"
          onChange={(e) => setUnit(e.target.value)}
          id="unit"
        >
          kgs
        </option>
        <option
          value="miles"
          onChange={(e) => setUnit(e.target.value)}
          id="unit"
        >
          miles
        </option>
      </select>
    </li>
    <li>
      <label for="date">Date</label>
      <input
        type="date"
        placeholder="Date completed"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        id="date"
      />
    </li>
    <li>
      <label for="submit">
        <button type="submit" onClick={addExercise} id="submit">
          Add Workout
        </button>{" "}
      </label>
    </li>
  </ul>
</fieldset>
</form> */
}