import "./App.css";
/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
export default function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}

        {users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
