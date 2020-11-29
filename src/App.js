import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{ borderColor: "white", color: "white" }}
        >
          <InstagramIcon style={{ marginRight: "10px" }} />
          Login
        </Button>
      </header>
    </div>
  );
}

export default App;
