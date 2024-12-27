import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../../friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
