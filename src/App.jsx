import "./App.css";
import userData from "./components/data/userData.json";

import Profile from "./components/ProfileFolder/Profile.jsx";

const App = () => {
  return (
    <>
      {/* Profile Section */}
      <div id="profile-section">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </>
  );
};

export default App;
