import micoff from "./Images/microphone-off.webp";
import micon from "./Images/microphone.webp";
import { IconButton } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="notes">
      <h1>Voice notes</h1>
      <div className="microphone">
        <IconButton>
          <img className="mic-icon" src={micoff} alt="microfono" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
