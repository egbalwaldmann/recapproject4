import { uid } from "uid";

export default function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formInput = form.elements.activity.value;
    const checkbox = form.elements.checkbox.checked;
    console.log(formInput, checkbox);

    const newActivity = {
      name: formInput,
      isForGoodweather: checkbox,
      id: uid(4),
    };

    onAddActivity(newActivity);
    form.reset();
    form.elements.activity.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>weather app</h1>
        {/* new activity field */}
        <h2>Add new activity</h2>
        <label htmlfor="activity-name"></label>
        <input id="activity-name" type="text" name="activity"></input>

        {/* good weather activity checkbox */}
        <label htamlfor="good-weather-activity">Good-weather activity</label>
        <input
          id="good-weather-activity"
          type="checkbox"
          name="checkbox"
        ></input>

        {/* submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
