import React from "react";

export default function Form() {
  return (
    <form>
      <h1>Add new Activity</h1>

      <label htmlFor="">Name</label>
      <br />
      <input text="name" />
      <br />
      <input type="checkbox" />
      <label>Good Weather Activity</label>
      <br />
      <button type="submit">Submit</button>
      <br />
    </form>
  );
}
