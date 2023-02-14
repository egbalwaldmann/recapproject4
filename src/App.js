import "./App.css";

function App() {
  return (
    <div>
      <form>
        <h1>weather app</h1>

        {/* new activity field */}
        <h2>Add new activity</h2>
        <label for="activity-name">activity name</label>
        <input id="activity-name" type="text" name="activity-name"></input>

        {/* good weather activity checkbox */}
        <label for="good-weather-activity">Good-weather activity</label>
        <input
          id="good-weather-activity"
          type="checkbox"
          name="good-weather-activity"
        ></input>

        {/* submit button */}
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
