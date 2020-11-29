import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./App.css";
import { CLIENT_ID, REDIRECT_URI } from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{ borderColor: "white", color: "white" }}
          href={`https://www.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`}
        >
          <InstagramIcon style={{ marginRight: "10px" }} />
          Login
        </Button>
      </header>
    </div>
  );
}

export default App;
