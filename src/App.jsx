import "./App.css";
import UserData from "./data/UserData.json";
import FriendsData from "./data/FriendData.json";
import Transaction from "./data/Transaction.json";

import Profile from "./components/ProfileFolder/Profile.jsx";
import FriendList from "./components/FriendListFolder/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistoryFolder/TransactionHistory.jsx";

const App = ({ initialUserIndex = 0 }) => {
  const user = UserData[initialUserIndex];
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

      {/* Friends Section */}
      <div id="friends-section">
        <FriendList friends={FriendsData} />
      </div>

      {/* Transactions Section */}
      <div id="history-section">
        <TransactionHistory items={Transaction} />
      </div>
    </>
  );
};

export default App;
