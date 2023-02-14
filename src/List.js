// import { useLocalStorageState } from "useLocalStorageState";

export default function NewListItem({ activities }) {
  // [toDoActivity, setTodoActivity] = useLocalStorageState
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodweather === true;
  });

  return (
    <div>
      {/* <h2></h2> */}
      <ul>
        {filteredActivities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </div>
  );
}

// function HeaderForTheWeatherCondition({ activities }) {
//   const filteredActivities = activities.filter((activity) => {
//     activity.isForGoodweather === true ? (
//       <h2>The Weather is Awesome! Go outside and :</h2>
//     ) : (
//       <h2>Bad Weather outside! Here's what you can do now:</h2>
//     );
//   });
// }
