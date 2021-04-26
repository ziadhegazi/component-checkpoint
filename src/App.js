import Fullname from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"
import Profile from "./Component/Profile/ProfilePhoto"
import "./App.css"

function App() {
  return (
    <div className="container">
      <Profile />
      <Fullname/>
      <Address/>
    </div>
  );
}

export default App;
