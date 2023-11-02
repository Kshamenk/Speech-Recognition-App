import { IconButton, Typography } from "@mui/material";
import { NeonButton } from "./Components/StyledComponents/StyledComponents";
import DisplayNotes from "./Components/DisplayNotes/DisplayNotes";
import { useEffect, useState } from "react";
import micoff from "./Images/microphone-off.webp";
import micon from "./Images/microphone.webp";
import "./App.css";

//Inicializacion del Speecher
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
//Config

mic.continuous = true;
mic.interimResults = true;
mic.lang = "es-ES";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [notes, setNotes] = useState(null);

  const [savedNotesToDo, setSavedNotesToDo] = useState([]);
  const [savedNotesInProcess, setSavedNotesInProces] = useState([]);
  const [savedNotesDone, setSavedNotesDone] = useState([]);

  const savedNotes = [
    {
      group: "todo",
      name: savedNotesToDo
    }, {
      group: "inprocess",
      name: savedNotesInProcess
    }, {
      group: "done",
      name: savedNotesDone
    }
  ]


  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("cintinue...");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped the mic");
      };
    }
    mic.onstart = () => {
      console.log("Mic is on");
    };
    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript).join(""); //se acumula aqui el dictado
      console.log(transcript);
      setNotes(transcript);
      mic.onerror = (event) => console.log(event.error);
    };
  };

  return (
    <div className="notes">
      <h1>Voice notes</h1>
      <div className="microphone">
        <IconButton onClick={() => setIsListening((prevState) => !prevState)}>
          <img
            className="mic-icon"
            src={isListening ? micon : micoff}
            alt="microfono"
          />
        </IconButton>
      </div>
      <NeonButton status="todo" onClick={() => {
        setSavedNotesToDo([...savedNotesToDo, notes])
      }} >To Do 🗒️</NeonButton>
      <NeonButton status="inprocess" onClick={() => {
        setSavedNotesInProces([...savedNotesInProcess, notes])
      }} >In Process ✍️</NeonButton>
      <NeonButton status="done" onClick={() => {
        setSavedNotesDone([...savedNotesDone, notes])
      }} >Done! ✅</NeonButton>
      <Typography variant="h4" component="h2" gutterBottom>
        {notes}
      </Typography>
      <DisplayNotes data={savedNotes} />
    </div>
  );
}

export default App;
