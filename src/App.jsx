import "./App.css";
import userData from "./data/userData.json";
import friendsData from "./data/friendData.json";
import transaction from "./data/transaction.json";

import Profile from "./components/ProfileFolder/Profile.jsx";
import FriendList from "./components/FriendListFolder/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistoryFolder/TransactionHistory.jsx";

const App = ({ initialUserIndex = 0 }) => {
  const user = userData[initialUserIndex];
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
        <FriendList friends={friendsData} />
      </div>

      {/* Transactions Section */}
      <div id="history-section">
        <TransactionHistory items={transaction} />
      </div>
    </>
  );
};

export default App;
