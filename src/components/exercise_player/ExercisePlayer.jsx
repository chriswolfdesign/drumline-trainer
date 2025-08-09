import ReactAudioPlayer from "react-audio-player";
import Card from "@mui/material/Card";

const CARD_STYLE = {
  textAlign: "center",
};

function ExercisePlayer() {
  return (
    <Card sx={CARD_STYLE}>
      <ReactAudioPlayer src="exercises/example/example.mp3" controls={true} />
    </Card>
  );
}

export default ExercisePlayer;
